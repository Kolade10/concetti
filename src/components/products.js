import React from "react";
import "../index.css"

export default function Product(props){
    return(
        <div className="prod-card">
            <img src={props.image}/>
            <p>{props.descript}</p>
            <div className="price-grid">
                <h2>{props.price}</h2>
                <p className="discount">{props.discount}</p>
                <button>ADD CART</button>
            </div>
        </div>
    )
}