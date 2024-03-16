
import { useState } from 'react';
import './App.css';



import React from 'react'

function App() {
  console.log('renderApp');  
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]); 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        inc
      </button>
      <List items={items} />
    </div>
  );
}



const List = React.memo(({ items })=>{
  {
    console.log('renderList');
    return items.map((item, key) => (
      <div key={key}>item: {item.text}</div>
    ));
  }
})

export default App

