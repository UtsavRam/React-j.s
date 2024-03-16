import React, { useEffect, useState } from 'react'
import Header1 from './Header1'
import { Link } from 'react-router-dom'

function SignUp() {

    const [unm,setUnm] =useState('')
    const [uem,setUem] =useState('')
    const [userData,setUserData] = useState('');

  

    const [upwd,setUpwd] =useState('')
    const [ucpwd,setUcpwd] =useState('')




useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then((res)=>{return  res.json()})
    .then((data)=>{
        setUserData(data)
    })
},[])

    const handleSubmit = (e)=>{

        e.preventDefault();
        const data = {unm,uem,upwd}
        if(unm=="" || uem =="" || upwd=="")
        {
            alert("Fields are empty..!");
        }

        else if(upwd !== ucpwd)
        {
            alert("Passwords do not match.!");
        }

      
        
        else{

            // console.log(userData)
            userData.map((user)=>{
                if(user.uem == uem)
                {
                    alert("Email already in DBMS..!")
                }
                else{
                     fetch('http://localhost:5000/users',{
                method:"post",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })
            .then((res)=> {
                if(res)
                {
                    alert("Registration Done..!")
                }

            })
           
            .catch((err)=>{ console.log(err.message)})
                }
            })
           
        }

       

    }

  return (
    <div >
        
		<section id="home" className="welcome-hero">

		
<div className="top-area">
    <div className="header-area">
        
        <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

            <div className="container">

              
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="index.html">carvilla<span></span></a>

                </div>
               

              
                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className=" scroll active"><a href="#home">home</a></li>
                        <li className="scroll"><a href="#service">service</a></li>
                        <li className="scroll"><a href="#featured-cars">featured cars</a></li>
                        <li className="scroll"><a href="#new-cars">new cars</a></li>
                        <li className="scroll"><a href="#brand">brands</a></li>

                        <li className="scroll">
                            <Link to="/signup">Sign Up</Link>
                        </li>

                        <li className="scroll">
                        <Link to="/signin">Sign In</Link>
                            </li>

                        <li className="scroll"><a href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
       
    </div>
    <div className="clearfix"></div>

</div>


<div className="container">
    <div className="welcome-hero-txt">
        <h2>Registration</h2>
        <div className="container">
    <div className="row">
        <div className="col-md-12">


        <form onSubmit={handleSubmit}>
		<div className="form-group">
    <label >Username</label>
    <input
     type="text"
      className="form-control"
       id="exampleInputfirstname"
        name="firstname"

        value={unm}
        onChange={(e)=>{setUnm(e.target.value)}}
        
        />
  </div>

  <div className="form-group">
    <label>Email address</label>
    <input
     type="email"
      className="form-control"
       id="exampleInputEmail1"
       aria-describedby="emailHelp"
        name="email"
        value={uem}
        onChange={(e)=>{setUem(e.target.value)}}
        />
  </div>

  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword" name="password"
     value={upwd}
     onChange={(e)=>{setUpwd(e.target.value)}}
    />
  </div>

  <div className="form-group">
    <label>Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputcPassword" name="password"
    value={ucpwd}
     onChange={(e)=>{setUcpwd(e.target.value)}}
    />
  </div>

  <button type="submit" className="btn btn-primary" name="create">Sign up</button>
</form>
        </div>
    </div>
</div>
       
    </div>
</div>



</section>
    
	
</div>

   
  )
}

export default SignUp
