import React, { useState } from 'react'

const Inkrment = [
    {id:1,title:"html"},
    {id:2,title:"html"},
    {id:3,title:"html"},
    {id:4,title:"html"},
]

function Todom() {
    const [todo,settodo] = useState (Inkrment)
    const [task,settask] = useState ();

    const Add = ()=>
    {
        if(task == "")
        {
            alert("plz enter the value..?")
        }
        else
        {
            settodo([...todo,{
                id:todo.length+1,
                title:task
            }])
            settask("")
        }
    }
    const Delet = (id)=> 
    {
        const Deletvalue = todo.filter((el)=>el.id !== id);

        settodo(Deletvalue);
    }
  return (
    <>
       <input type="text" value={task} onChange={(e)=>settask(e.target.value)} />
       <button onClick={Add}>Add</button>

       {
        todo.map((el,i)=> (
            <ul key={i}>
                <li>{el.title}</li> 
                <button onClick={()=>Delet(el.id)}>Delet</button>                              
            </ul>
        ))
       }
    </>
  )
}

export default Todom