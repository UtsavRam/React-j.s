import React, { useState } from 'react'

function Array() {

    const [count,setcount]=useState(0);
    // hook syntax



    const inc= ()=>{
        setcount(count+1);
    }
    const dec= ()=>{
        setcount(count-1);
    }
  return (
    <div>
        <button onClick={inc}>
            increment
        </button>
        <h1>
            {count}
        </h1>
        <button onClick={dec}>
            decrement
        </button>
    </div>
  )
}

export default Array