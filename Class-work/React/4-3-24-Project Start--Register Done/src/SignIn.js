import React from 'react'
import { Link } from 'react-router-dom'


function SignIn() {
  return (
    <div>
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
        <h2>Login</h2>
        <div className="container">
    <div className="row">
        <div className="col-md-12">


        <form>
		<div class="form-group">
    <label for="firstname">Username</label>
    <input type="text" class="form-control" id="exampleInputfirstname" name="firstname"/>
  </div>

 
  <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword" name="password"/>
  </div>

  

  <button type="submit" class="btn btn-primary" name="create">Sign In</button>
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

export default SignIn
