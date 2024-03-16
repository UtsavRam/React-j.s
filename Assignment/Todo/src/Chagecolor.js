import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Chagecolor() {

  const[mode,modechange]=useState('bg-dark text-white');
  const handelChange = ()=>{
    modechange((prev)=>prev=="bg-dark text-white"?"bg-success text-red":"bg-dark text-white");
  }
  return (
    <div>
      <h1 className='text-center'>
      color change
      </h1>
        <div className="col-2 m-auto">
          <button onClick={handelChange} className='btn btn-lg btn-primary d-block m-auto'> 
            change heme
          </button>
        <input className='form-check-input p-3' type="checkbox" name="" id="" onChange={handelChange} />

        </div>
      <div className={`${mode} col-4 mx-auto my-5 border-5 border p-5 border-dark`}> 
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde, quas adipisci necessitatibus voluptatum cupiditate nobis distinctio pariatur beatae, maiores modi doloribus vel temporibus. Quis eaque laboriosam excepturi iure repellat!
      </div>
      
    </div>
  )
}

export default Chagecolor