import React, { useState } from 'react'
import Addtodo from './Addtodo';
import Tasklist from './Tasklist';
     
const golblvalue = [
    {title:"KGF", id:1},
    {title:"animal",id:2},
    {title:"surya",id:3}
  ]
  let nextid = 4;

function Maintodo() {
    const [todo,settodo]= useState (golblvalue) 
    console.log(golblvalue)
  
   function handeladd(title) {
  
      settodo([
          ...todo,
          {
            id:nextid++,
            title:title
          }
      ])
      
    }

    function handelonchange(nextodo) 
    {
      settodo (
        todo.map(t=>{
          if(t.id === nextodo.id)
          {
            return nextodo;
          }
          else 
          {
              return t;
          }
        })
      )
    }
    function handelondelet (todoid) 
    {
      settodo(
        todo.filter((t)=> { return t.id !== todoid})
      )
    }
    return (
      <>
       <Addtodo addtodo={handeladd}/>
       <Tasklist todos={todo} abc={handelonchange} ondelet={handelondelet}/>
      </>
      
    );
}

export default Maintodo
