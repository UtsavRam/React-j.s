import React, { createContext, useContext, useState } from 'react'

const themeContext = createContext()

function Multipalpages() {
  const [theme,setTheme] = useState("light")
  return (
    <div style={{margin: "0 auto"}}>
      <themeContext.Provider value={theme}>
        <WelcomePanel title={"Welcome"}>
          <Panel>
            <Login/>
          </Panel>
        </WelcomePanel>
     </themeContext.Provider>
     <input
      type='checkbox'
      onChange={(e)=>{setTheme(e.target.checked? "dark" : "light")}}
      ></input> {theme} Mode
    </div>
  )
}
function Login() {
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")

  const canLogin = fname!="" && lname!=""
  return(
    <div>
      <div>
        <label>FirstName : </label>
        <input
         type='text'
         value={fname}
         onChange={(e)=>{setFname(e.target.value)}}
         ></input>
      </div>
      <div>
        <label>LastName : </label>
        <input 
        type='text'
        value={lname}
        onChange={(e)=>{setLname(e.target.value)}}
        ></input>
      </div>
      <Button disabled={!canLogin} >Login</Button>
    </div>
    
  )
}
function Button ({children,disabled}){
  return(
    <>
    <button className='Panel-dark' disabled={disabled} >{children}</button>
    </>
  )
}
function Panel({children}){
  return(
    <>{children}</>
  )
}
function WelcomePanel({children,title}){
  const theme = useContext(themeContext)
  const class123 = 'Panel-'+theme
    
  return(
    <div className={class123}>
    <h1>{title}</h1>
    {children}
    </div>
  )
}
export default Multipalpages