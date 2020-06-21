import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  //let [number , setNumber] = React.useState(40);
 let value = 85;


  return (
    <ValueContext.Provider value={value}>
  <div>
    Hello World 
    <Parent > </Parent>
   
    </div>
    </ValueContext.Provider>
   //num={number}
    //<button onClick={()=>{setNumber (++ number) }}>  Update Number</button>
   // <br/>
   // <button onClick={()=>{setNumber (-- number) }}>  Decrease Number</button>
  );
}

export default App;
