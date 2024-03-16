import React, { useState } from 'react'

function Fetch() {
  const [Api,setapi]= useState ("")

  const Fetchapi = ()=> 
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setapi(data));
  }
  console.log(Api)
  return (
    <div>
      <button className='btn btn-primary p-3 m-3' onClick={Fetchapi}>Fetch Api</button>
      <table className="table table-dark">
    <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>USERNAME</th>
        <th>EMAIL</th>
      </tr>
    </thead>
    <tbody>
   {Api && Api.map((el,i)=>(
    <tr key={i} className='text-center'>
      <td>{el.id}</td>
      <td>{el.name}</td>
      <td>{el.username}</td>
      <td>{el.email}</td>
    </tr>
   ))}
    </tbody>
  </table>
    </div>
  )
}

export default Fetch