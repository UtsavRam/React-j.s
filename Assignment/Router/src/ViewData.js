import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ViewData() {

   const [datilesh,setDatilesh] = useState ('')
   const naviget = useNavigate()

    useEffect(()=>{
      fetch('http://localhost:8000/users')
      .then((res)=>{return res.json();})
      .then((data)=>{
         // console.log(data) 
         setDatilesh(data)
      })
    })
     const handeledit = ()=>
     {
         naviget('/home')
     }
  return (
    <div>

      <div className="container mt-5 aling-items-center" id='container'>
          <table className="table table-striped ">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Sallary</th>
                <th>Action</th>
              </tr>
                  {datilesh && datilesh.map((v)=>(
                     <tr >
                          <td>{v.id}</td>
                          <td>{v.name}</td>
                          <td>{v.sallary}</td>
                     
                          <td>
                          <button className='btn btn-success px-4 me-3' onClick={handeledit}>Edit</button>
                          <button className='btn btn-danger px-3'>Dellte</button>
                          </td>
                      </tr>
                  ))}
              <tr>
               
              </tr>
          </table>
      </div>
     
    </div>
  )
}

export default ViewData