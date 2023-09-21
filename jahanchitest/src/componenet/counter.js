import React,{useState,Component} from "react";
import './counter.css'
const Counter=()=>{
const[count,setCount]=useState(0);
  const[name,setName]=useState('mohammad');
  const handleChange=(e)=>{
    setName(e.target.value);
    console.log(name)
  }
  const mystyle={
    color:'green',
    fontweight:'bold',
  }
  return(
    <div>
      <p style={mystyle}>yo clicked {count}times</p>
      <button onClick={()=>setCount(count+1)} >
        Click Me
      </button>
      <input name="name" value={name} onChange={handleChange} />
    </div>
  )
}
export default Counter;