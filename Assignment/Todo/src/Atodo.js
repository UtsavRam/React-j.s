import React, { useState } from 'react'

const inisiyal = [
  {id:1 , title:"Html1"},
  {id:2 , title:"Html2"},
  {id:3 , title:"Html3"},
  {id:4 , title:"Html4"}
]
let newvalue = 5;

function Atodo() {
  const [data,setData]= useState (inisiyal)
  const [name,setName]= useState("")
  const [edit,setEdit]= useState("")
  const [text,setText]= useState("")

  const Add = ()=>
  {
    if(name.trim() !== "")
    {
      setData([ ...data,
        {id:newvalue+1,
          title:name
        }
      ])
      setName("")
    }
    else
    {
      alert("plz enter value...!")
    }
  }

  const handeldelet = (id)=>
  {
    const ubdatevalue = data.filter((items)=> items.id !== id)
    setData(ubdatevalue)
  }
  const handelEdit = (editid,textname)=>{
    setEdit(editid)
    setName(textname)
  }
  const handelsave = (userid)=>
  {
    if(text.trim()!==""){
      setData(data.map((f)=>(f.id==userid)?{...f,title:text}:f))
      setEdit(null)
      setText("")
    }
  }
  return (
    <div className='App'>
      <div>
          <input type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          />
          <button onClick={Add} className='btn btn-outline-primary'>Add</button>
      </div>
      {data.map((v,i)=>(
          <ul type="none" key={i}>

              {(edit==v.id)?(
                <li>
                  <input type="text" />
                  <button
                  onClick={()=>{handelsave(v.id)}} 
                  value={text}
                  onChange={((e)=> {setText(e.target.value)})}
                  >Save</button>
                  <button onClick={()=>{handeldelet(v.id)}}>Delete</button>
                </li>
              ):(
                <li>
                  {v.title}
                      <button onClick={()=>{handelEdit(v.id,v.name)}}>Edit</button>
                      <button onClick={()=>{handeldelet(v.id)}}>Delete</button>
                </li>               
              )}
          </ul>
        ))
      }
    </div>
  )
}

export default Atodo