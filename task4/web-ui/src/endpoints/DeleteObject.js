import React,{useState} from 'react'
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'bootstrap';

export default function DeleteObject() {
  let navigate =useNavigate();

  const [obj, setObj]=useState({
    
    id:"",
      
});

const{id}=obj;

  const onInputChange=(e)=>{
    setObj({...obj,[e.target.name]: e.target.value});
}

const onSubmit=async (e)=>{
  e.preventDefault()
  console.log("hgg")
  await axios.delete(`http://localhost:8080/deleteById?id=${obj.id}`)
  navigate("/");
};

  return (
    <div className='container'>
        <div className='row hover'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4 bg-light rounded '>Delete A Server Object</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                        Enter the ID
                    </label>
                    <input
                    type={"text"}
                    className='form-control shadow'
                    placeholder='Enter The ID'
                    name="id"
                    value={id}
                    onChange={(e)=>onInputChange(e)}
                    />
                    </div>
                    <button type = "submit" className='btn btn-outline-dark '>
                    Submit 
                 </button>
                <Link className="btn btn-outline-danger"to="/">Cancel
                </Link>
                </form>
        </div>
        </div>
    </div>
  )
}
