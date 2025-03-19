import React, { useState} from 'react';
import './App.css';

const App=()=> {
  const [input,setInput]=useState("");
  const buttons=['1','2','3','+','4','5','6','-','7','8','9','*','C','0','=','/','.','%','back'];
const handleClick=(data)=>{
  if(data==='C'){
    setInput("");
  }
  else if(data === '='){
    const result=eval(input);
    setInput(result);
  }
      else if(data === 'back'){
        setInput(input.slice(0,-1));
      }
      else{
        setInput(input+data);
      }
}
  return (
    <div className="container">
      <h1>Digital Calculator</h1>
      <div className="calculatorBody">
        <input type='text' value={input} className="input" readOnly/>
        {
          buttons.map((data)=>
             <button onClick={()=>handleClick(data)} className="button">{data}</button>
          )
          }
        
      </div>
        
    </div>
  );
}

export default App;
