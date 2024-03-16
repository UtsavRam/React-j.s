import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Adduser } from './Reusers';
import { useNavigate, useParams } from 'react-router-dom';


let i=4;
function Edituser() {
    const dispatch = useDispatch();
    const naviget = useNavigate();
    const {usersid} = useParams();

    console.log(usersid);


    const users = useSelector(state=> state.users);
    // console.log(users);

    const experes = users.filter((imte)=>{
        // console.log(imte)
        return imte.id == usersid
    })
    console.log(experes[0]); // {id: 1, name: 'Utsav', emial: 'U@gmail.com', phone: 1234}

    const {id,name,emial,phone} = experes[0];

    const [uid,setId] = useState(id)
    const [uname,setName] = useState(name)
    const [uemial,setEmail] = useState(emial)
    const [uphone,setPhone] = useState(phone)

    console.log(experes);
  
    const handelsubmit = (e)=> {
      e.preventDefault();
      dispatch(Adduser({id:i++,name,emial,phone}))
      naviget("/home")
    }
    return (
      <div>

        <h1>Edit User</h1>
  
          <div id='Foram'>
              <div className="container bg-dark text-light m-5" id='container'  style={{width:"500px" , padding:"30px"}}>
            <form onSubmit={handelsubmit}>

            <div className="form-group">
                    <label>ID</label>
                    <input type="text" 
                    className="form-control"
                    value={uid}
                    disabled={"disabled"}
                    />
                  </div>

                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" 
                    className="form-control"
                    value={uname}
                    onChange={(e)=>{setName (e.target.value)}}
                    />
                    {name.length == 0  && <span className='text-danger'>* Enater Your Name</span>}
                   
                  </div>
  
                  <div  className="form-group mt-3">
                    <label>Emial :</label>
                    <input type="emial" 
                    className="form-control" 
                    value={uemial}
                    onChange={(e)=>{setEmail (e.target.value)}}
                    />
                    {emial.length == 0 && <span className='text-danger'>* Enter Your Email</span>}
                    
                  </div>
  
                  
                  <div v className="form-group mt-3">
                    <label >Phone:</label>
                    <input type="Number" 
                    className="form-control"  
                    value={uphone}
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

export default Edituser