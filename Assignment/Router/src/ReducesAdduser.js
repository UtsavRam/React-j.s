import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Adduser } from './Reusers';
import { useNavigate } from 'react-router-dom';

let i=4;
function ReducesAdduser() {

  const [name,setName] = useState("")
  const [emial,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const dispatch = useDispatch();
  const naviget = useNavigate()

  const handelsubmit = (e)=> {
    e.preventDefault();
    dispatch(Adduser({id:i++,name,emial,phone}))
    naviget("/home")
  }
  return (
    <div>

        <div id='Foram'>
            <div className="container bg-dark text-light m-5" id='container'  style={{width:"500px" , padding:"30px" }}>
          <form onSubmit={handelsubmit}>
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" 
                  className="form-control"
                  value={name}
                  onChange={(e)=>{setName (e.target.value)}}
                  />
                  {name.length == 0  && <span className='text-danger'>* Enater Your Name</span>}
                 
                </div>

                <div  className="form-group mt-3">
                  <label>Emial :</label>
                  <input type="emial" 
                  className="form-control" 
                  value={emial}
                  onChange={(e)=>{setEmail (e.target.value)}}
                  />
                  {emial.length == 0 && <span className='text-danger'>* Enter Your Email</span>}
                  
                </div>

                
                <div v className="form-group mt-3">
                  <label >Phone:</label>
                  <input type="Number" 
                  className="form-control"  
                  value={phone}
                  onChange={(e)=> {setPhone(e.target.value)}}
                  />
                  {phone.length == 0 && <span className='text-danger'>* Enter Your Number</span>}
                </div>

                <button  type='submit' className="btn btn-outline-primary mt-3">Submit</button>
          </form>
        </div>
            </div>

    </div>
  )
}

export default ReducesAdduser