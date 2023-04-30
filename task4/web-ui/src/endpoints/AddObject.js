import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';


export default function AddObject() {

    let navigate =useNavigate();

    const [obj, setObj]=useState({
        name:"",
        id:"",
        language:"",
        framework:"",   
    });

    const{name,id,language,framework}=obj;

    const onInputChange=(e)=>{
        setObj({...obj,[e.target.name]: e.target.value});
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/add",{
            name: obj.name,
            id: obj.id,
            language: obj.language,
            framework: obj.framework
        })
        navigate("/");
    };
  return (
    <div className="container ">
        <div className='row hover'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4 bg-light rounded '>Add a New Object</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input
                    type={"text"}
                    className='form-control shadow'
                    placeholder='Enter The Name'
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='id' className='form-label'>
                        ID
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
                <div className='mb-3'>
                    <label htmlFor='language' className='form-label'>
                        Language
                    </label>
                    <input
                    type={"text"}
                    className='form-control shadow'
                    placeholder='Enter The language'
                    name="language"
                    value={language}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='framework' className='form-label'>
                    Framework
                    </label>
                    <input
                    type={"text"}
                    className='form-control shadow'
                    placeholder='Enter The framework'
                    name="framework"
                    value={framework}
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
