import React from 'react';

import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  let value = React.useState (40);
  
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








   //line9
    //let [number , setNumber] = React.useState(40);

//  value [0]
//  value [1]
//value = [number , setNumber]
  );
}

export default App;
