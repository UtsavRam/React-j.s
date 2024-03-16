import React from 'react';
function Serch() {
  return (
    <>
      <div className="container m-2">
        <div className="row w-100 border border-1 border-secondry px-2 py-3 rounded-4 mt-3 ms-xl-5 ms-2">
          <div  className='position-relative col-xl-4 col-lg-4 col-12'>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/square600/327839869.webp?k=cea84baf9ad6663d7f1847a5356bce43856bddde6696068a7f2387467b1c042d&o="
              className="w-100  border border-rounded-10px "
              alt=""
             style={{height:"300px", width:"200px"}}/>
            <i className="far fa-heart position-absolute top-0 end-0 m-3 fs-3 "></i>
          </div>
          <div className="row position-absoulte d-inline-block  col-xl-6 col-lg-6 col-12 mt-2">
            <div className=" d-flex">
             <h5 className='text-primary mt-2'>Vida Beach Resort Umm Al Quwain</h5>
             <div className='ms-2 m-3 d-flex'>
              <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
              <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
              <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
              <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
              <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
             </div>
             <div className='d-flex justify-content-end ms-5 star'> 
                 <span className='mt-2'>Fabulous <br />125reviews</span> <button className='btn btn-primary m-2 ms-3'>8.7</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serch;



{/* <div class="row w-100 border border-1 border-secondry px-2 py-3 rounded-4 mt-3 ms-xl-5 ms-2">
          <div class="col-xl-4 col-lg-4 col-12">
          <img style="border-radius:20px"   src="https://cf.bstatic.com/xdata/images/hotel/square600/327839869.webp?k=cea84baf9ad6663d7f1847a5356bce43856bddde6696068a7f2387467b1c042d&o=" width="100%" height="250px"/>
          </div>

          <div class="col-xl-6 col-lg-6 col-12 mt-2">
            <h4>
              <a class="text-decoration-none" id="title" href="">
              </a>
            </h4>
            <p class="sw-mp">
              <a href=""></a> . <a href="">Show on map</a>
            </p>
            <p>
            </p>
          </div>
          <div class="col-xl-2 col-lg-2 col-12">
            <div class="d-flex align-items-center">
              <div>
                <p>29 reviews</p>
              </div>
              <div class="ms-2">
                <a class="bg-primary text-white p-2 rounded-2" href="">
                  7.3
                </a>
              </div>
            </div>
            <p class="nwbook bg-warning px-1 rounded-1 d-inline-block">
              New to Booking.com
            </p>
            <button class="bg-primary text-white py-1 px-2 border-0 rounded">
              Show prices
            </button>
          </div>
        </div> */}
    