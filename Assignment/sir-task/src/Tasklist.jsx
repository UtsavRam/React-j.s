import React, { useState } from 'react'


function Tasklist({todos,abc,ondelet}) {
  return (
    <>
        <ul>
            {
                todos.map((t,i)=>(
                    <li key={i}>
                        <Task
                        todo = {t}
                        xyz={abc}
                        ondelettodo={ondelet}
                        />
                    </li>
                ))
            }
        </ul>
    </>
  )
}

function Task ({todo,xyz,ondelettodo})
{

    const [edit,setedit] = useState (false);
    
    let convent;

    if(edit)
    {
        convent = 
        <>
            <input type="text" value={todo.title} onChange={(e)=>(
                xyz({
                    ...todo,  // Spred Operator
                    title:e.target.value
                })
            )} />
            <button className='btn btn-info m-3' onClick={()=> {setedit(false)}}>Save</button>
        </>
    }      
    else
    {
        convent = 
        <>
            {todo.title}
            <button className='btn btn-primary m-3' onClick={()=> {setedit(true)}}>Edit</button>
        </>
    }

    return (
        <>
            {convent}
            <button className='btn btn-danger m-3' onClick={()=>{ondelettodo(todo.id)}}>delet</button>
        </>
    )
}


export default Tasklist;