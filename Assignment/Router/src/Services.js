import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
    <>
     
      <div className=' container-fluid '>
          <div className="container">
            <Link className='ms-5 m-2  text-dark text-decoration-none' to='service1'>Image 1</Link>                             
            <Link className='ms-5 m-2  text-dark text-decoration-none' to='service2'>Image 2</Link>                             
            <Link className='ms-5 m-2  text-dark text-decoration-none' to='service3'>Image 3</Link>                             
            <Link className='ms-5 m-2  text-dark text-decoration-none' to='service4'>Image 4</Link>         
          </div>                      
      </div>
      <Outlet/>
    </>
  )
}

export default Services