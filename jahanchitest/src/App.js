import React,{Component} from "react";
import User from "./users/User";

class App extends Component {
  render(){
    return(
      <div>
        <h1>mohammad react course</h1>
        <hr />
        <User></User>
        <User></User>
        <User></User>
      </div>
    )
  }
}
export default App