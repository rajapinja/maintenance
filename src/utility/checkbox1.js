/* Rewrite the above component to use props instead. */ 

import React, {useState} from 'react'; 

function Checkbox(props) { 
  
  const [checked, setChecked] = useState(false); 
  const checkedText = props.onText; 
  const uncheckedText = props.offText; 
  const togglePreference = props.togglePreference; 
  const animal = props.animal; 
 // const payment = props.payment; 
  
  const handleChange = () => {     
    setChecked(!checked); 
    togglePreference(animal); 
    console.log(!checked);    
  }; 
  
  return (     
    <div>      
        <input type="checkbox" onChange={handleChange} togglePreference={togglePreference} />     
        {checked ? checkedText : uncheckedText} 
    </div>      
  ); 
}; 
export {Checkbox};