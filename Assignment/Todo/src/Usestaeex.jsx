import React, { useState } from 'react'

function Usestaeex() {
    const [statee,setstate] = useState (0)

    const handelclick = ()=> {
        // setstate(11)

        // setstate(statee +1)

        // setstate(()=> (
        //     statee +1
        // ))

        // setstate((purv)=> (
        //     purv +1
        // ))

        setstate(purav => purav +1)
    }
  return (
    <div>
       <h5>{statee}</h5>
       <button onClick={handelclick}>Click</button>
    </div>
  )
}

export default Usestaeex