import React from 'react'
import Home from './Home'
import Flights from './Flights'
import { Outlet, Route, Routes } from 'react-router-dom'
import Flitgth_hotel from './Flitgth_hotel'
import Car from './Car'
import Action from './Action'
import Airpot from './Airpot'
import Serch from './Serch'

function Roadmap() {
  return (
    <div>
        
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/flights' element={<Flights/>}></Route>
    <Route path='/hotel' element={<Flitgth_hotel/>}></Route>
    <Route path='/Car' element={<Car/>}></Route>
    <Route path='/Action' element={<Action/>}></Route>
    <Route path='/Airpot' element={<Airpot/>}></Route>
    <Route path='/Serch' element={<Serch/>}></Route>
   </Routes>
   <Outlet/>
    </div>
  )
}

export default Roadmap