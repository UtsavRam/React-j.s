import React, { useState } from 'react'

function Stringstate() {
    const [str,setstr]= useState ("hi")

    const handelclick = ()=>
    {
        // setstr("hello Utsav")

            // setstr(str + " " + "UP")

            // setstr(()=> (
            //     "heloo jigari"
            // ))

            setstr((prev)=>(
                str + " " + "hi"
            ))

            setstr(prev => str + " Utsav " + "Ram" + prev);
    }
  return (
    <>
       <h5>{str}</h5>
       <button onClick={handelclick}>Chage str</button>
    </>
  )
}

export default Stringstate