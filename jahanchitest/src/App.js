import React,{Component} from "react";
import User from "./users/User";

class App extends Component {
  render(){
    return(
      <div>
       <User name="Mohammad"age="27" />
       <User name="ali" age="20" />
       <User name="neda" age="11"/>
       <User name="reza" age="37"/>
       <User name="aref" age="42"/>

      </div>
    )
  }
}
export default App