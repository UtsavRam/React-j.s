import React, { useState } from 'react'

function DataFilter() {

    const [serch,setSerch] = useState ("")
    const [data,seData] = useState ("")
    const [filters,setFilters] = useState ([])

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> {return res.json()})
    .then((data)=>{
        seData(data)
    })
     
    const handelSerch = ()=>
    {
        const Filterdata = data.filter((v)=> (v.name.toLowerCase().includes(serch)));
        setFilters(Filterdata);
    }
  return (
    <>

     <input type="text" value={serch} onChange={(e)=>{setSerch(e.target.value)}}/>
     <button className='btn btn-primary' onClick={handelSerch}>Serch</button>
      {
        data &&
        filters.map((v)=>(
            <li key={v.id}>{v.name}</li>
        ))
      }
    </>
  )
}

export default DataFilter