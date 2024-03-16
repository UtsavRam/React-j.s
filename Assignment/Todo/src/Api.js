import React, { useState } from 'react'

function Api() {

  const [name,setName]= useState ()
  const [email,setEmail]= useState ()


  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res)=> {return res.json})
  .then((data)=> console.log(data))
  return (
    <div>
        <div className='contenare border border-1 border-dark d-block m-auto my-3 text-center bg-dark text-light' style={{ height: '200px', width: '440px' }}>
        <div className='m-4'>
          <label htmlFor=''>Name :- </label>
          <input type='text' placeholder='Enter Your Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          /> <br /><br />
          <label htmlFor=''>Email :- </label>
          <input type='email' placeholder='Enter Your Email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> <br /><br />
          <button className='btn btn-primary'>
            Submit
          </button>
        </div>
      </div>

      <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</table>
    </div>
  )
}

export default Api