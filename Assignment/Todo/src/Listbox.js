import React from 'react'
import Box from './Box'

function Listbox() {
    const data = [];

    for(let i=1; i<=50; i++)
    {
        data.push(<li>items {i}</li>)
    }
  return (
    <div>
     <ul>
        {data}
        <Box/>
        {data}
     </ul>
   


   
    </div>
  )
}

export default Listbox