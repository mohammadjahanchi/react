import React from "react";

const User=(props)=>{
    console.log(props)
    return(
        <h1>{props.age}-{props.name}</h1>
    )
}

export default User;