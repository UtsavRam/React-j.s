import React from 'react'

function Tasklab() {
    const students = [
        {n1:1,id:1},
        {n2:2,id:2},
        {n3:3,id:3} ]

  return (
    <div>
         {
        students.map((v,i)=>(
          // console.log(i)
          // console.log(v.n)

          <ul key={v.id}>
          <li>{v.n1}</li>
          <li>{v.n2}</li>
          <li>{v.n3}</li>
          {/* <li>2</li>
          <li>3</li> */}
        </ul>

        ))
      }
    </div>
  )
}

export default Tasklab