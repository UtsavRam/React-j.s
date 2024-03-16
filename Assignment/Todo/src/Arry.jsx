import React, { useState } from 'react'

function Arry() {

    const [arr,setarry]= useState ([12,13,14])

    const handelclick = ()=> {
        setarry (["hi" ,22 , 90])
    }
   
  return (
    <div>
        <h4>{arr [0]}</h4>
        <button onClick={handelclick}>Click</button>
    </div>
  )
}

export default Arry