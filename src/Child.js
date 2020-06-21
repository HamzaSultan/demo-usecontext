import React from 'react';
import ValueContext from './ValueContext';


function Child() {

let Value = React.useContext(ValueContext);


  return (
    <div>
    Child number {Value}
    </div>
  );
}

export default Child;
