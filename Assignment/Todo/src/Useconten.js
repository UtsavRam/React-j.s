import React, { useReducer } from 'react'; // Import useReducer from React


function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
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
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };
function Usereduse() {
  const [state, dispatch] = useReducer(reducer, initialState); // Fix the typo here

  function handleclick() {
    dispatch({ type: 'incremented_age' });
  }

  function handlechage(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value, // Fix the typo here
    });
  }

  return (
    <>
      <input type="text" onChange={handlechage} />
      <button className='btn btn-primary' onClick={handleclick}>
        Ian Age
      </button>
      <p>
        hello {state.name} you are age {state.age}
      </p>
    </>
  );
}

export default Usereduse;
