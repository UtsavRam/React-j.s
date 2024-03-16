import React, { useState } from 'react'

function Form_object() {

    const [value,setValue]= useState ({
      Firstname : "",
      Lastname  : "",
      Email   : ""
    })
  return (
    <div>
     First Name :-  <input type="text" placeholder='Enter Your Name' value={value.Firstname} onChange={(e)=> {
      setValue({
        ...value,
        Firstname:e.target.value
      })
      
     }} /><br /><br />
     Last Name :-  <input type="text" placeholder='Enter Your Last Name ' value={value.Lastname} onChange={(e)=> {
      setValue({
        ...value,
        Lastname:e.target.value
      })
     }} /><br /><br />
     Email :-  <input type="text" placeholder='Enter Your Email' value={value.Email} onChange={(e)=> {
      setValue({
        ...value,
        Email:e.target.value
      })
     }} /> <br /> <br />
    First Name :- {value.Firstname} {"  "} <br />
    Last  Name :- {value.Lastname} {"  "} <br />
    Email      :- {value.Email} {"  "}
    </div>

  )
  
}

export default Form_object