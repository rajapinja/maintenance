import React, {useState} from 'react'; 

export const options = [  {label: "Choose Month", value: "default", },
  {label: "JAN", value: "JAN", },
  {label: "FEB",  value: "FEB", },
  {label: "MAR",  value: "MAR", },
  {label: "APR",  value: "APR", },
  {label: "MAY", value: "MAY", },
  {label: "JUN",  value: "JUN", },
  {label: "JUL",  value: "JUL", },
  {label: "AUG",  value: "AUG", },
  {label: "SEP", value: "SEP", },
  {label: "OCT",  value: "OCT", },
  {label: "NOV",  value: "NOV", },
  {label: "DEC",  value: "DEC", } ];

  export const optionsYear = [  {label: "Choose Year", value: "default" },
  {label: "2021", value: "2021", },
  {label: "2022",  value: "2022", },
  {label: "2023",  value: "2023", },
  {label: "2024",  value: "2024", },
  {label: "2025", value: "2025", },
  {label: "2026",  value: "2026", },
  {label: "2027",  value: "2027", },
  {label: "2028",  value: "2028", },
  {label: "2029", value: "2029", },
  {label: "2030",  value: "2030", },
  {label: "2031",  value: "2031", },
  {label: "2032",  value: "2032", } ];  

  export const expenditureType = [{label: "Choose Exp Type", value: "default" },
  {label: "Cash", value: "Cash", },
  {label: "Bank_Cheque",  value: "Bank_Cheque"}]

  export const paymentType = [{label: "Choose Pay Type", value: "default" },
  {label: "Cash", value: "Cash", },
  {label: "UPI",  value: "UPI"},
  {label: "Online",  value: "Online"},
  {label: "Cheque",  value: "Cheque"} ]


  /* Checkbox component to use props instead. */ 

export function Checkbox(props) { 
  
  const [checked, setChecked] = useState(false); 
  const checkedText = props.onText; 
  const uncheckedText = props.offText; 
  const togglePreference = props.togglePreference; 
  const animal = props.animal; 
  
  const handleChange = () => {     
    setChecked(!checked); togglePreference(animal);    
  };   
  return (     
    <div>
      <p>
        {checked ? checkedText : uncheckedText}
      </p>      
    </div>      
  ); 

}; 

// Returns BASE61 value
export function base62_encode(deci){

  const s ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const hash_str='';
  while (deci > 0){
    hash_str = s[deci % 62] + hash_str;
    deci =  deci / 62;
  }
  return hash_str;
  console.log(base62_encode(999));
};


export default options;