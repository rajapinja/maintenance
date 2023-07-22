/* Create a checkbox functional component. onChange, log a message to the console. */ 

import React, {useState} from 'react'; 

function Checkbox() { 

  const [checked, setChecked] = useState(false); 
  
    const handleChange = (e) => {    
      //console.log(e.target.value)        
      setChecked(!checked); 
      console.log(!checked)  
    }; 

    
    return ( 
      <div>
        <input type="checkbox" onChange={handleChange} unchecked></input> &nbsp;      
          {checked ? 'Cash' : 'Online'}
      </div>
    );     
  }; 
  
  export {Checkbox};