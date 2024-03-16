import React, { useState } from 'react'
import { User } from './Userdata'

function Filterapi() {

    const [serch,setSerch] = useState ("")
    const [filterdata,setFilterdata] = useState ([])

    const handelSerach = ()=>
    {
      const Filterdata = User.filter((v)=>(v.name.toLowerCase().includes(serch)))
      setFilterdata(Filterdata);
    }

  return (
    <>  

    <input className='' type="text" value={serch} onChange={(e)=> {setSerch(e.target.value)}} />
    <button className='btn btn-primary ms-3' onClick={handelSerach}>Serch</button>
    {
        filterdata.map((v)=>(
            <p>{v.name}</p>
        ))
    }

    </>
  )
}

export default Filterapi