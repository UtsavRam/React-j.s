import React from 'react';
import Data from '../src/img/Rohitbooking.jpg';

function Home() {
  return (
    <>
        <div className="container-fluid position-relative">
           <div className="row ">
               <img src={Data} height={"520px"} width={"100%"}>
               </img>
               <h1 className='position-absolute text-white'>Booking.com</h1>
           </div>
           <button className='position-absolute top-50 start-50 translate-middle btn btn-primary'>
                Explore holiday rentals
          </button>
      </div> 

    </>
  )
}

export default Home