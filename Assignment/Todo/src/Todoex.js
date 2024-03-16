import React, { useState } from 'react'

function Todoex() {
  const Intodo = [
    {id:1, title:"Html"},
    {id:2, title:"css"},
    {id:3, title:"Bootrasp"},
    {id:4, title:"js"},
    {id:5, title:"react"},
  ]

  const [todo,settodo] = useState (Intodo)
  const [task,settask] = useState ();
  console.log(todo)
 
  const Addtodo = ()=>
  {
    if(task.trim() == "") // as trim space ne count na kare trim na lagadeiye to space ne cerekter pan leta he
    {
      alert("plase enter this value...!");
    }
    else
    {
      settodo([...todo,{        // spere opretar todo ko copay karta he 
        id:todo.length+1,      // todo me ek lenth ko inkrement karta he HTml he to js ko add karta he
        title:task            // task me value add karta he input ke 
      }])   
      settask("") 
    }
  }

  const deletetodo = (id)=>
  {
        const ubdatetodo = todo.filter((el)=>el.id!==id); // dh
        settodo(ubdatetodo);
  }
  return (
    <>
    <h1>Todo</h1>
    <div className='d-flex col-5'>
      <input className='form-control' type="text" value={task} onChange={(e)=>settask(e.target.value)} />
      <button className='btn  btn-primary ms-3 btn-lg' onClick={Addtodo}>Add</button>
    </div>
    {
      todo.map((el,i)=> (
        <ul>
          <li>{el.title}</li>
          <button className='btn btn-danger m-2' onClick={()=>deletetodo(el.id)}> 
          {/* => Arow Fuction decler alwsy and alwsy decler karna pade ga */}
            Delet
          </button>
        </ul>
      ))
    }
    </>
  )
}

export default Todoex
