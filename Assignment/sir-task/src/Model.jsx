import React, { useEffect, useRef } from 'react'

function Model({info,children}) {

  const xyz = useRef();

  useEffect(()=> {
    if(!info)
    {
      return;
    }

    const digitalbox = xyz.current
    digitalbox.showModal();

    return ()=>
    {
      digitalbox.close();
    }
  },[info])
  return (
    <div>
        
        <dialog ref={xyz}>{children}</dialog>

    </div>
  )
}

export default Model