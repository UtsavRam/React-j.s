import React, {  useEffect, useRef } from 'react'

function Modeldilog({info,children}) {

   const xyz = useRef();

  useEffect(()=> {
    if(!info)
    {
       return;
    }
       
    const dialogbox = xyz.current
    dialogbox.showModal();

    return ()=>
    {
      dialogbox.close();
    }
  },[info])

  return (
    <>
       <dialog ref={xyz}>{children}</dialog>
    </>
  )
}

export default Modeldilog