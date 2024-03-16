import React, { useState } from 'react'

function Fetch() {
    const [data,setdata]=useState("");
    const fetchApi = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setdata(data));
    }
    console.log(data);
  return (
    <div>
        <h1>
        Fetch Data
        </h1>
        <button onClick={fetchApi} className='btn btn-lg btn-primary'>
        fetch api
        </button>
        <table className="table">
    <thead>
      <tr className='text-center'>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
    {data && data.map((el,i)=>(
     <tr key={i} className='text-center'>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.email}</td>
        <td>{el.username}</td>
     </tr> 
    ))} 
    </tbody>
  </table>
 
       
        
    </div>
  )
}

export default Fetch