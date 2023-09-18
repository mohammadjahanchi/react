import React from "react";
import PropTypes from 'prop-types'
const Welcom = (props) => {
    return (
    <div>
        {props.children}
    </div>

    )

}
 export const Website=(props)=>{
    return(
        <div>
            <Welcom>
                <h1>Welcom to reacr </h1>
                <h2>test</h2>
            </Welcom>  
            <h2>react.ir</h2>
            <p onClick={props.handler}>My Name is {props.name} and I {props.age} years old</p>
        </div>
    )
}



export default Welcom;
Website.propstype={
    name:PropTypes.string,
    age:PropTypes.number.isRequired
}