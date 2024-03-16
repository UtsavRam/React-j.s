import React from 'react';
import Data from '../src/img/Rohitbooking.jpg';
import Actions from './Actions';

function Home() {
  return (
    <>
        <div className="container-fluid position-relative">
           <div className="row ">
               <div className='img'></div>
               <h1 className='position-absolute text-white top-50'>Howzat for a perfect stay</h1>
               <p className=''>Search hotels, homes and musch more</p>
           </div>
           <button className='btn btn-primary UP'>
                Discover more
          </button>
          <div className='Container '>
            <Actions/>
          </div>
      </div> 
    
      <div className="container">
        <h1>offers</h1>
        <p>Promotions, deals, and special offers for you </p>
      </div>
      <div className="container">
        <h1>Trending destinations </h1>
        <p>Most popular choices for travelers from india</p>

        <div className="row">
          <img src="" alt="" />
        </div>
      </div>

     

    </>
  )
}

export default Home