import React, { useState } from 'react'

function Fetchex() {
    const [data,setdata]= useState("");
    const Fetchdata  = ()=>
    {
        fetch("https://jsonplaceholder.typicode.com/photos").then((res)=>res.json()).then((data)=>setdata(data));
    }
    console.log(data);
  return (
    <>
        <h1>Fecth API</h1>
        <button onClick={Fetchdata}  className='btn btn-lg btn-primary'>
            Fetch API
        </button>
        
        <table className="table">
    <thead>
      <tr className='text-center'>
        <th>albumId</th>
        <th>id</th>
        <th>title</th>
        <th>url</th>
        <th>thumbnailUrl</th>
      </tr>
    </thead>
    <tbody>
        {data && data.map ((v,k)=> 
        <tr className='text-center'>
            <td>{v.albumId}</td>
            <td>{v.id}</td>
            <td>{v.title}</td>
            <td><img src={v.url} width={100} alt=""/> </td>
            <td><img src={v.thumbnailUrl} width={100} alt=""/></td>
        </tr>
        )}
    </tbody>
    </table>
    </>
  )
}

export default Fetchex