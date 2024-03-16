import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const naviget = useNavigate()

const [name,setNmae] =  useState("")
const [sallary,setSalary] = useState ('')

const handelclick = (e)=>{
  // console.log(handelclick);

  const Userdata = {name,sallary}
  // console.log(Userdata);

  fetch('http://localhost:8000/users' , {
    method:"post",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(Userdata)
  })

  .then((res)=>{
    if(res){
      alert("Sucees fulay data add");
      return res.json()
    }   
  })                                
  naviget("/Viewdata")

}
  return (
    <div id='Foram'>
     <div className="container m-5" id='container'  style={{width:"500px" , padding:"30px"}}>
  <form onSubmit={handelclick}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" 
          className="form-control"
          value={name}
          onChange={(e)=> {setNmae(e.target.value)}}
          />
        </div>

        <div v className="form-group mt-3">
          <label >Sallary:</label>
          <input type="Number" 
          className="form-control"  
          value={sallary}
          onChange={(e)=> {setSalary(e.target.value)}}
          />
        </div>

        <button  type='submit' className="btn btn-outline-primary mt-3">Submit</button>
        <button   className="btn btn-outline-dark mt-3">Vivew</button>
  </form>
</div>
    </div>
  )
}

export default Home 