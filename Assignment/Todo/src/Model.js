import React, { useState } from 'react'
import Modeldilog from './Modeldilog'

function Model() {
  const [show,setShow] = useState (false)
  return (
    <>
       <button onClick={()=> {setShow(true)}}>Open Model Box</button>

       <Modeldilog info={show}>
        
        <label htmlFor="">Name :-</label>
        <input type="text" placeholder='Enter Your Name' />
        <label htmlFor="">Email</label>
        <input type="emial" placeholder='Enter Your Email'/> <br /> <br />
        <button className='btn btn-primary ' onClick={()=> {setShow(false)} }>close</button>
        <input className='bg-primary border boredr-none p-2 border-roude-3 text-center ms-3' type="submit" value={"submit"} />

       </Modeldilog>
    </>
  )
}

export default Model