import React, { useState } from 'react'

function AddTodo({Imptitle}) {
  const [intitle,setIntitle] = useState ("")
  return (
    <>
    <div className='d-flex justify-content-center aling-items-center mt-5 '>
    <input type="text" value={intitle} onChange={(e)=> {setIntitle(e.target.value)}} />
    <button className="btn btn-primary ms-3" 
    onClick={
      ()=> {Imptitle(intitle)}
    }>Add</button>
    </div>
    </>
  )
}

export default AddTodo