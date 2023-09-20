import React,{useState} from "react";
const State=()=>{
    const [count, setCount] = useState(20);

    const incrementCount = () => {
      setCount(count + 1);
    };
    
    const decrementCount = () => {
      setCount(count - 1);
    };
    
    return (
      <div>
        <button onClick={incrementCount}>افزایش</button>
        <button onClick={decrementCount}>کاهش</button>
        <p>تعداد: {count}</p>
      </div>
    );
    
}
export default State;
