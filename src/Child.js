import React from 'react';
import ValueContext from './ValueContext';


function Child() {

let value = React.useContext(ValueContext);
 console.log("value", value);
 let updateValue= value[1];

  return (
    <div>
    Child number {value}
    <br/>
    <button onClick={()=>{updateValue(++value[0]); }}>  Update value</button>
    </div>
  );
}

export default Child;
