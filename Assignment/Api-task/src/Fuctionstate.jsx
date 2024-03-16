import React, { useState } from 'react'

function Fuctionstate() {
    const  [str,setstr] = useState ("hii");

    const Handelclick = ()=>
    {
        // setstr("hello" + " " + "Utsav" )

        // setstr(()=>(
        //     "hmmm"
        // ))

        // setstr((v)=>(
        //     str + " " + str
        // ))

        setstr((v => str + " " + "hello"))
    }

  return (
    <>
    <h1>{str}</h1>
    <button onClick={Handelclick}>+</button>
    </>
  )
}

export default Fuctionstate