import { type } from '@testing-library/user-event/dist/type';
import React , { Usereduse } from 'react'

function reducer(state, action)
{
    switch(action.type){
        case 'incremented_age' : {
            return{
                name:state.name,
                age: state.age + 1
            };
        }
        case 'changed_name': {
            return {
              name: action.nextName,
             age: state.age
            };
          }
    }
    throw Error ('Unkow action :' + action.type);
}

const initinalState = {name: 'taylor' , age: 42};


function Usereduse() {
    
    const [state,dispatch] = Usereduse(reducer,initinalState)
    
   function handelclick() {
    dispatch({type: 'incremented_age'});
   }

   function handelchage(e) {
    dispatch({
        type: 'changed_name',
        nextname : e.target.value
    });
   }

   
  return (
    <>
        <input type="text"
        onChange={handelchage} />
        <button className='btn btn-primary' onClick={handelclick}>Ian Age</button>
        <p>hello  {state.name} you are age {state.age}</p>
    </>
  )
}

export default Usereduse