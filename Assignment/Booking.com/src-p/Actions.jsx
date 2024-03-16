import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function Actions() {

    const [search,setsearch] =useState("");

    const Celer = ()=> {
      setsearch("")
    }
  return (
    <div>
<div className="col-10 m-auto"> 
  <div className="row border border-3 border-warning">
  <div className="col-4 d-flex justify-content-center align-items-center border border-2 border-warning">
   <span>
   <svg xmlns="http://www.w3.org/2000/svg" height={"30px"} width={"30px"} viewBox="0 0 24 24"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg>
   </span>
  <Form.Control className='m-3 me-0' size="lg" value={search} onChange={(el) => setsearch(el.target.value)}  type="text" placeholder="Wher are You Going?" />
  <button className='btn' onClick={Celer}>
  <i className="fa-solid fa-xmark"></i>
  </button>
    

  </div>
  <div className="col-3 d-flex justify-content-center align-items-center border border-2 border-warning">1</div>
  <div className="col-3 d-flex justify-content-center align-items-center border border-2 border-warning">1</div>
  <div className="col-2 d-flex   border border-2 border-warning">
    <div className='col-12'>
    <Link to='/Serch'>
    <button className='btn btn-primary  fs-3 mt-0 w-100 h-100'>Serch</button>
    </Link>
    </div>
  </div>
  </div>
</div>
    </div>
  )
}

export default Actions