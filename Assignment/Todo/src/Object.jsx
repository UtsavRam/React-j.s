import React, { useState } from 'react'

const Add = {
    name:"Utsav",
    address :{
        city : {
            nam : "ahemdabd",
            ara : "Sg"
        },
    },
};

function Object() {
    const [obj,setobj]= useState (Add)

    const handelchg = ()=> {

        setobj ({
            ...obj,
            address:{
                ...obj.address,
            city:{
                ...obj.address.city,
                ara:"cg" 
            }    
            }
        })
    }

  return (
    <div>
        <li>{obj.name}</li>
        <li>{obj.address.city.nam}</li>
        <li>{obj.address.city.ara}</li>
      <button onClick={handelchg}>Change</button>
    </div>
  )
}

export default Object