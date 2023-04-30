import React,{useState,useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FindStringObject() {
  let navigate =useNavigate();

  const [obj, setObj]=useState({
    
    name:"",
      
});

const{name}=obj;

  const onInputChange=(e)=>{
    setObj({...obj,[e.target.name]: e.target.value});
}

const onSubmit=async (e)=>{
  e.preventDefault()
  const result =await axios.get(`http://localhost:8080/findByName?name=${obj.name}`)
  setObj(result.data);
};
  return (
    <div className='container'>
    <div className='row hover'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4 bg-light rounded '>Find A Server Object By String</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                    Enter the String
                </label>
                <input
                type={"text"}
                className='form-control shadow'
                placeholder='Enter The String'
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
    <div className='py-4'>
        <table className="table table-bordered shadow table-hover">
            <thead className="table-primary" >
                 <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Language</th>
      <th scope="col">Framework</th>
    </tr>
  </thead>
  <tbody>
    {
        (
            <tr>
            
            <td>{obj.id}</td>
            <td>{obj.name}</td>
            <td>{obj.language}</td>
            <td>{obj.framework}</td>
          </tr>
        
        
            )
    }

  </tbody>
</table>
        </div>
</div>

  )
}
