import Data from './Data.json';
import { useState } from 'react';

function Apiimg() {

    const[imgdata,setimgdata]= useState (Data.imgdata)
    console.log(imgdata)


  return (
   <>
      <div className="row">
      {
        imgdata.map((v,k)=>(
            <div className="col-3">
                <img src={v.Poster}  height={"25%"} width={200} />
                <h1></h1>
            </div>
        ))
      } 
      </div>
   </>
  )
}

export default Apiimg;