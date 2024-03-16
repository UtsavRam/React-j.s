import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Home() {
  return (
    <div>

      
          
       <Header/>
	
	
		

		
		<section id="service" className="service">
			<div className="container">
				<div className="service-content">
					<div className="row">
						<div className="col-md-4 col-sm-6">
							<div className="single-service-item">
								<div className="single-service-icon">
									<i className="flaticon-car"></i>
								</div>
								<h2><a href="#">largest dealership <span> of</span> car</a></h2>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
								</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="single-service-item">
								<div className="single-service-icon">
									<i className="flaticon-car-repair"></i>
								</div>
								<h2><a href="#">unlimited repair warrenty</a></h2>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.  
								</p>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="single-service-item">
								<div className="single-service-icon">
									<i className="flaticon-car-1"></i>
								</div>
								<h2><a href="#">insurence support</a></h2>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. 
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		


	

		<script src="assets/js/jquery.js"></script>
        
     
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
		
	
        <script src="assets/js/bootstrap.min.js"></script>
		
	
		<script src="assets/js/bootsnav.js"></script>

		
        <script src="assets/js/owl.carousel.min.js"></script>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

       
        <script src="assets/js/custom.js"></script>
        
   
      
    </div>
  )
}

export default Home

