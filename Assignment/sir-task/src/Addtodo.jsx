import React, { useState } from 'react'

function Addtodo({addtodo}) {
    const [title,settitle]= useState ("")
  return (         
    <>
        <label>Add Movie Name :-</label>
        <input  type="text" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
        <button className='btn btn-primary ms-3' onClick={()=> {
            addtodo(title)
        }}>Add</button>
       
    </>      
  )
}

export default Addtodo