import React, { useRef, useState } from 'react'
import { User } from './Userdata';
import { Link } from 'react-router-dom';

function Bookinginput() {

    const [value,setValue] = useState ("");
    const [serch,setSerch] = useState ([]);
    const [show,setshow] = useState(true);

    const Inputvalue = useRef()
    console.log(Inputvalue.current)
    
    const handelSerch = ()=>
    {
      const Filterdata = User.filter((v)=> (v.title.toLowerCase().includes(value)))
      setSerch(Filterdata);
      setshow(false)
      // console.log(Filterdata)
    }
    return (
    <>
       <input type="text" ref={Inputvalue} value={value} onChange={(e)=> {setValue(e.target.value)}} />
       <button onClick={handelSerch} >Serch</button>
       

       {(show)?(
         User.map((v)=>(
           <div key={v.id}>
            
           <p onClick={()=> {Inputvalue.current.value=v.title}}>{v.title}</p>
      
        </div>))):(

          serch.map((v)=>(
         <div key={v.id}> 
      

          <div  className='container m-2 bg-#006ce499'>
            <div className='row w-100  px-2 py-3 rounded-4 mt-3 ms-xl-5 ms-2 mainrow'>
                <div className='position-relative col-xl-4 col-lg-4'>
                   <Link to='/img'> <img className='w-100  border border-rounded-10px' src={v.img} style={{height:"300px", width:"300px"}} /></Link>
                    <i className="far fa-heart position-absolute top-0 end-0 m-4 fs-3 text-light"></i>
                </div>

              <div className='row text-primary  d-inline-block col-xl-8  mt-2   '>
               <div className='row col-12 ms-4'>
                 <div className='d-flex col-xl-9  '>
                        <p className='end-0  font-weight-bold fs-4 '>{v.name}</p>
                        <div className='ms-2 m-2 d-flex'>
                          <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                          <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                          <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                          <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                          <i className="fa-solid fa-star " style={{ color: '#fbff00' }}></i>
                      </div>
                  </div>
                      <div className='col-xl-3   d-flex justify-content-end '>
                                <span className='ms-1'>{v.geart} <br /> {v.review}</span> 
                                <button className=' border-0 rentbtn mt-1 ms-2'>{v.btn}</button>
                     </div> 
               </div>

                  <div className=' ms-4 d-flex col-12 '>
                    <div className='col-10'><p>{v.location}<span className='text-dark ms-4'>{v.km}</span></p></div>
                    <div className='col-2'><button className='btn btn-primary mt-2'>{v.show}</button></div>
                  </div>

                  <div >
                    <h4 className='text-secondary ms-4'>{v.title}</h4>
                    <p className='text-dark m-4'>{v.para}</p>
                  </div>
              </div>
            </div>
          </div>
         </div>
      )))
       }
    </>
  )
}

export default Bookinginput