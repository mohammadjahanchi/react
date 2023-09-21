import React,{useState,Component} from "react";
import './counter.css'
import styled from 'styled-components';

const Counter=()=>{
const[count,setCount]=useState(0);
  const[name,setName]=useState('mohammad');
  const handleChange=(e)=>{
    setName(e.target.value);
    console.log(name)
  }
  // const mystyle={
  //   color:'green',
  //   fontweight:'bold',
  // }
  const Button=styled.button`
  cursor:pointer;
  backround:transparat;
  font-size:50px;
  `
  return(
    <div>
      <p>yo clicked {count}times</p>
      <Button onClick={()=>setCount(count+1)} >
        Click Me
      </Button>

      <input name="name" value={name} onChange={handleChange} />
    </div>
  )
}
export default Counter;