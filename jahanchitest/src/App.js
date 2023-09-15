import React,{Component} from "react";
import User from "./users/User";
import './App.css';
import Product from "./products/Product";

const App=()=>{
  return(
    <div className="container">
      <Product title="کفش اسپرت" image="images/1.jpg" price={120} />
      <Product title="کفش مجلسی" image="images/4.jpg" price={200} />
      <Product title="کفش رنگی رنگی" image="images/2.jpg" price={150} />
    </div>
  )
}
export default App;