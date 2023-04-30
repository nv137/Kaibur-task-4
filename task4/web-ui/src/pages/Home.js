import React,{useEffect,useState} from 'react'
import axios from 'axios';  

export default function Home() {

    const [obj,setObj]=useState([])

    useEffect(() =>{
            loadObj();
    },[]);

    const loadObj=async()=>{
        const result=await axios.get("http://localhost:8080/findAll")
        setObj(result.data)
    }

  return (
    <div className='container'>
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
        obj.map((obj,index)=>(
            <tr>
            
            <td>{obj.id}</td>
            <td>{obj.name}</td>
            <td>{obj.language}</td>
            <td>{obj.framework}</td>
          </tr>
        
        
            ))
    }

  </tbody>
</table>
        </div>
    </div>
  )
}
