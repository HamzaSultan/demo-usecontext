import React, { useReducer} from 'react';
import numberReducer from './numberReducer';



function Child2() {
    let [state, dispatch] = useReducer(numberReducer,42);
  return (
    <div>
    Child 2 {state}
    <br/>
    <button onClick={()=>{ dispatch ({type:"INCREMENT" ,val:65}); }}> Increment</button>
    <br/>
    <button onClick={()=>{ dispatch ({type:"DECREMENT" , val: 54});  }}> Decrement</button>
    </div>
  );
}

export default Child2;
