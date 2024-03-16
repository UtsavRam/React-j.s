import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


function ReducoseHome() {
   const Users =  useSelector(state=>state.users)
   const naviget = useNavigate()
  //  console.log(Users);

  const handelclick = (id)=>{
    // console.log(id)
    naviget("/edituser/"+id)
  }
  return (
    <div>
        <div className="container m-5">
        <Link to="/Adduser" className='btn btn-primary my-2 d-felx jusctfy-content-center aling-itmes-center'>Add Users</Link>
            
           <table className='table table-hover table-dark'>

               <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Emial</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
           {Users.map((v,i)=>(
                  <tbody key={i}>
                     <tr>
                        <td>{v.id}</td>
                        <td>{v.name}</td>
                        <td>{v.emial}</td>
                        <td>{v.phone}</td>
                        <td>
                          <button className='btn btn-outline-info me-3'>Vivew</button>
                          <button onClick={()=>{handelclick(v.id)}} className='btn btn-outline-primary  me-3'>Edit</button>
                          <button className='btn btn-outline-danger me-3'>Deleate</button>
                        </td>
                     </tr>
                </tbody>
            ))}
           </table>
        </div>
    </div>
  )
}

export default ReducoseHome