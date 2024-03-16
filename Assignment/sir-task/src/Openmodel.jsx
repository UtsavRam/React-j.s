import React, { useState } from 'react'
import Model from './Model'

function Openmodel() {
  const [box,setBox]= useState (false)
  return (
    <>
        
    <button className='ms-3' onClick={()=> {setBox(true)}}>Open Model</button>
    <Model info={box}>
       <h1>Hello I'm Model</h1>
        <button onClick={()=> {setBox(false)}}>Close</button>
    </Model>

    </>
  )
}

export default Openmodel