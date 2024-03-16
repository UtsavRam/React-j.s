import React, { useState } from 'react'
import AddTodo from './AddTodo'

const intionvalue = [
    {id:1,title:"Utsav"},
    {id:2,title:"Vivek"},
    {id:3,title:"Rohit"},
    {id:4,title:"Milan"},
    {id:5,title:"Mayur"}
]
let nextid = 5
function TodoProp() {
    const [todo,setTodo] = useState (intionvalue)
    console.log(todo);

    const Setimptodo = (intitle)=> {
       setTodo([...todo,
    {
        id: nextid++,
        title:intitle
    }])
    setTodo("")
    }
  return (
    <>
    <AddTodo Imptitle={Setimptodo}/>
    </>
  )
}

export default TodoProp