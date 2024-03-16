import React, { useRef, useState } from 'react'

function Inp() {
    const [up,setUp] = useState("")
    const valueUp = useRef()
    console.log(valueUp.current);
    const inputv = useRef()
  return (
    <>
        <div>
        <input
         type="text" 
         value={up}
         onChange={(e)=> {setUp(e.target.value)}}
         ref={inputv}
         />
        </div>

        <div>
            <p style={{
                position:'absolute',
                top:"0px"
            }} ref={valueUp} >Enter Your Name </p>
        </div>
    </>
    
  )
}



export default Inp