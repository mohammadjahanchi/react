import React from "react";
import './App.css';
import { Website } from "./componenet/welcom";
import Welcom from "./componenet/welcom";
const App=()=>{
  const ClickHandler=(name)=>{
    alert('hi'+''+name)
  }

  return(
    <div className="App" >
      <Website name="mohammad" age={27} handler={()=>ClickHandler("Mohammad")} />
      <Website name="ali" age={24} handler={()=>ClickHandler("Ali")} />
    </div>
  )
}
export default App;