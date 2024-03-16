// import React, { useState } from 'react'

// function Bollenex() {
//     const [bollen,setboolen]= useState (true)

//     const Handelclick = ()=> {
//         setboolen(false)
//     }

//   return (   
//     <div>
//         <h4>{(bollen) ? "T" : "F"}</h4>
//         <button onClick={Handelclick}>Click</button>
//     </div>
//   )
// }

// export default Bollenex


import React,{useState} from "react";

const intialtodo= [
    {id:1,title:"html"},
    {id:2,title:"bootstrap"},
    {id:3,title:"js"},
    {id:4,title:"css"},
]
function Todo(){
    const [todo,setTodo] = useState(intialtodo)
    const [task,setTask]=useState("");

    const[editid,seteditid]=useState("");
    const[edittext,setedittext]=useState("");

    const addTodo = ()=>{
       if(task.trim()=="")
       {
        alert("add some task...");
       }
       else{
        setTodo([...todo,{
            id:todo.length+1,
            title:task
        }]);
        setTask("");
       }
    }
    const deletetodo=(id)=>{
   const updatedtodo = todo.filter((el)=>el.id!==id);

      setTodo(updatedtodo);
    }

    const edittodo = (id,text)=>{
            seteditid(id);
            setedittext(text);
    }
    const saveTodo = (id)=>{
   const savedtodo = todo.map((el)=>el.id==id ?{...el,title:edittext}:el);
    setTodo(savedtodo);
    seteditid(null);



    }
    return(
        <div className="App">
            <h1 >Todo List</h1>
            <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} name="" id="" />
            <button onClick={addTodo}>Add</button>
            {
                todo.map((el,i)=>(
                    <ul key={i}>
                     {

                      el.id == editid ? (
                        <>
                        <input type="text" value={edittext} onChange={(e)=>setedittext(e.target.value)} name="" id="" />
                        <button onClick={()=>saveTodo(el.id)}>
                            Save
                        </button>
                        </>
                      )  : (
                        <>
                         {el.title}
                         <button onClick={()=>edittodo(el.id,el.title)}>
                            Edit
                         </button>
                         <button onClick={()=>deletetodo(el.id)}>
                            Delete
                         </button>
                        
                        </>
                      )
                     }
                    </ul>
                ))
            }
        </div>
    )
}

export default Todo;