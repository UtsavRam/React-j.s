import React, { useState } from 'react'
import { src } from './Imagedata'
import { data } from './Modeldata'
import Model from './Model'

function Imagegallry() {


    const [modelbox,setModelbox] = useState (false)

  return (
    <>
         {
            src.map((e)=>( 
              <>
              
              <div key={e.id}>
                <div className='container'>
                    <h1 className='text-primary mt-3 mb-4'>{e.heding}</h1>
                    <div className=' d-flex col-12' onClick={()=> {setModelbox(true)}}>
                        <div className=' col-5'>
                        <img src={e.img2} style={{height:"250px", width:"450px"}}/>
                        <img className='mt-2' src={e.img3} style={{height:"300px", width:"450px"}}/>
                        </div> 
                        <div className='col-7'>
                            <img src={e.img} style={{height:"557px", width:"650px"}}/>  
                        </div>
                   </div>
                   <div className='row' onClick={()=> {setModelbox(true)}}>
                      <img className='mt-2' src={e.img4}  style={{height:"150px", width:"285px"}}/>
                      <img className='mt-2' src={e.img5}  style={{height:"150px", width:"285px"}}/>
                      <img className='mt-2' src={e.img6}  style={{height:"150px", width:"285px"}}/>
                      <img className='mt-2' src={e.img7}  style={{height:"150px", width:"285px"}}/>
                   </div>
                </div>
            </div>
              
              </>
            ))
         } 

         {
            data.map((v)=>(
                <div key={v.id} style={{height:"55px"}} id='main'>
                  <div id='modell'>
                    <Model  info={modelbox} >
                       <div className='container ' id="model">
                            <div className='d-flex justify-content-center align-items-cneter col-12 '>
                                <div className=' d-flex justify-content-center align-items-cneter m-1 col-xl-11 fs-5 text-center'>
                                    <p>{v.h2}</p>
                                     <div className='ms-3 '>
                                        <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                                        <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                                        <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                                        <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                                        <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                                        <button className='btn btn-primary ms-3' style={{width:"150px" , height:"40px"}}>{v.modelbtn}</button>
                                     </div>
                                </div>
                                <div  onClick={()=> {setModelbox(false)}}  className='d-flex btn btn-danger h-100  m-1 col-1' id='close'>
                                <i className="fa-solid fa-xmark " ></i>
                                </div>
                            </div>

                            <div className="row">
                              <img className='mt-2' src={v.img} style={{width:"330px" , height:"250px"}} />
                              <img className='mt-2' src={v.img2} style={{width:"330px" , height:"250px"}} />
                              <img className='mt-2' src={v.img3} style={{width:"330px" , height:"250px"}} />
                            </div>
                            <div className="row">
                              <img className='mt-2' src={v.img4} style={{width:"330px" , height:"250px"}} />
                              <img className='mt-2' src={v.img5} style={{width:"330px" , height:"250px"}} />
                              <img className='mt-2' src={v.img6} style={{width:"330px" , height:"250px"}} />
                            </div>
                            <div className="row">
                              <img className='mt-2' src={v.img7} style={{width:"330px" , height:"250px"}} />
                              <img className='mt-2' src={v.img8} style={{width:"330px" , height:"250px"}} />
                              <img className='mt-2' src={v.img9} style={{width:"330px" , height:"250px"}} />
                            </div>
                            <div className="row">
                              <img className='mt-2' src={v.img10} style={{width:"330px" , height:"250px"}} />
                              <img className='mt-2' src={v.img11} style={{width:"330px" , height:"250px"}} />
                              <img className='mt-2' src={v.img12} style={{width:"330px" , height:"250px"}} />
                            </div>
                       </div>
                    </Model>
                  </div>
                </div>
            ))
         }
        
    </>
  )
}

export default Imagegallry