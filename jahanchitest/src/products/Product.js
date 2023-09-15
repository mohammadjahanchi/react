import React from "react";
import './product.css'

const Product = (props) => {
    console.log(props)

    return (
        <div>
            <h2>Product Card</h2>
            <div className="card">
                <img src={props.image} alt="denim" />
                <h1>{props.title}</h1>
                <p className="price">${props.price}</p>
                <p>کفش عالی و ضد ضربه با گارنتی شرکتی</p>
                <p><button>Add to cart</button></p>
            </div>
        </div>
    )
}
export default Product;