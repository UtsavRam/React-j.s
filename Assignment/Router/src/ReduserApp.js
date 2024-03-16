import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ReducoseHome from './ReducoseHome'
import ReducesAdduser from './ReducesAdduser'
import Edituser from './Edituser'
import Error from './Error'

function ReduserApp() {
  return (
    <div>
        <BrowserRouter>
        <Link className='btn btn-outline-primary  d-flex justify-content-center align-items-center' to="/home">View Users</Link>
            <Routes>
              <Route path='*' element={<Error/>}></Route>
                <Route path="/home" element={<ReducoseHome/>}></Route>
                <Route path='/Adduser' element={<ReducesAdduser/>}></Route>
                <Route path='/edituser/:usersid' element={<Edituser/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default ReduserApp