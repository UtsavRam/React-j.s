import React from 'react';
import { useState } from 'react';

function MouseMove() {
    const [pos,setPos] = useState({x:0,y:0});

    const handelMove =(e)=>{
      // console.log(e);
  
      setPos({
        x:e.clientX,
        y:e.clientY
      })
  
    }
  
    window.addEventListener("mousemove",handelMove)
  
    return (
  
      // <>
      // {pos.x}
  
      // </>
  
      <div style={{
        height:"15px",
        width:"15px",
        background:"black",
        borderRadius:"20px",
        transform:`translate(${pos.x}px,${pos.y}px)`,
        position:"absolute",
        top:"-7px",
        left:"-7px",
        border:"2px solid #87CEEB"
  
      }} >
  
         
       
      </div>
    );
}

export default MouseMove