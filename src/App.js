import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';

function App() {
  let [number , setNumber] = React.useState(40);
  return (
    <div>
    Hello World 
    <Parent num={number}> </Parent>
    <button onClick={()=>{setNumber (++ number) }}>  Update Number</button>
    <br/>
    <button onClick={()=>{setNumber (-- number) }}>  Decrease Number</button>
    </div>
  );
}

export default App;
