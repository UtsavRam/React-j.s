import React, { useState } from 'react'

function Chagecolorex() {
    const [Chage,setchage] = useState ('bg-dark text-white');

    const handelclick = ()=> {
        setchage ((parv)=>parv=="bg-dark text-white"?"bg-primary text-dark":"bg-dark text-white")
    }
  return (
    <>
    <p className={`${Chage} col-4 mx-auto my-5 border border-5 p-5 border-warning `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ex repudiandae deleniti dolores eligendi sapiente quam fugiat nam iusto doloribus voluptate aspernatur, asperiores doloremque incidunt harum delectus dolorem, adipisci reprehenderit.</p>

    <button className='btn btn-primary btn-lg d-block m-auto' onClick={handelclick}>On Chage</button>
    
    </>
  )
}

export default Chagecolorex