import React from 'react'
import { BrowserRouter, Link , Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Service1 from './Service1'
import Service2 from './Service2'
import Service3 from './Service3'
import Service4 from './Service4'
import ViewData from './ViewData'

function Api() {
  return (
    <>
    <BrowserRouter>

          <div className='  container-fluid ' id='container'>
               <div className="container">
                    <Link className='ms-5 m-2  text-dark text-decoration-none'  to='/home'>Home Page</Link>
                    <Link className='ms-5 m-2  text-dark text-decoration-none'  to='/about'>About</Link>
                    <Link className='ms-5 m-2  text-dark text-decoration-none'  to='/services'>Images</Link>
               </div>
          </div>

        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Services/>}>
                <Route path='service1' element={<Service1/>}></Route>
                <Route path='service2' element={<Service2/>}></Route>
                <Route path='service3' element={<Service3/>}></Route>
                <Route path='service4' element={<Service4/>}></Route>
            </Route>
            <Route path='/Viewdata' element={<ViewData/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Api