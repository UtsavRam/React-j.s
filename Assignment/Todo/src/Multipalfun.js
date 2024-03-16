import React, { createContext, useContext, useState } from 'react'

const themcontext = createContext()

function Multipalfun() {
    const [theme,setTheme] = useState ("light")
  return (
    <>
    <themcontext.Provider value={theme}>
        <Welcomepanel title={"Welcome"}>
            <Panel>
                <Login/>
            </Panel>
        </Welcomepanel>
    </themcontext.Provider>
    <input 
    type="checkbox"
    onChange={(e)=>{setTheme(e.target.checked? "dark" : "light")}}
    /> {theme} Mode
    </>
  )
}

function Login() {
    const [fname,setFname] = useState ("")
    const [lname,setLname] = useState ("")

    const Canlogin = fname!= ""  && lname!= ""
    return(
        <div>
            <div>
                <label>Firsat Name :- </label>
                <input 
                type="text"
                value={fname}
                onChange={(e)=>{setFname(e.target.value)}}
                 />
            </div>
            <div>
                <label>Last Name :- </label>
                <input 
                type="text"
                value={lname}
                onChange={(e)=>{setLname(e.target.value)}}
                 />
            </div>
            <Button disabled={!Canlogin}>
                Login
            </Button>
        </div>
    )
}
function Button({children,disabled}) {
    const theme = useContext(themcontext)
    const clasname2 = 'panle-' + theme
    return(
        <>
         <button className={clasname2} disabled={disabled}>{children}</button>
        </>
    )
}
function Panel({children}) {
    return(
        <>
            {children}
        </>
    )
}
function Welcomepanel({children,title}) {
    const theme = useContext(themcontext)
    const clasname2 = 'panle-' + theme

        return(
            <div className={clasname2}>
            <h2>{title}</h2>
             {children}
            </div>
        )
}

export default Multipalfun