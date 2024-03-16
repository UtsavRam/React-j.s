import React, { useEffect, useRef } from 'react'

function Box() {
    const divref = useRef();

    useEffect(()=> {
        const div = divref.current;

        const objserver = new IntersectionObserver((en)=>{

            const entry = en[0];
            
            if (entry.isIntersecting) {
                document.body.style.background = "#000";
                document.body.style.color = "#fff";  // Fixed the typo here
            } else {
                document.body.style.background = "#fff";
                document.body.style.color = "#000";
            }
        },{
            threshold:1
        }) 
        objserver.observe(div);
       
    })
  return (
    <div ref={divref} style={{ height: "100px", width: 100, border: "10px solid red" }}>
            {/* Your content goes here */}
        </div>
  )
}

export default Box