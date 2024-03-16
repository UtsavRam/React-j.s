import React, { useEffect, useRef } from 'react'

function Model({info,children}) {

    const openmodel = useRef();

    useEffect (()=>{
        if(!info)
        {
            return
        }
        
            const dialogbox = openmodel.current
            dialogbox.showModal();

        return ()=>     
        {
            dialogbox.close();
        }    
        
    },[info])
  return (
    <div>
        <dialog ref={openmodel} style={{margin:'auto'}}>{children}</dialog>
    </div>
  )
}

export default Model