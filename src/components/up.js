import React from "react";
import "../index.css"

export default function Up(props){
    return(
        <div>
            <div className="up-img-box">
                <img src= {props.image}/>
            </div>
            <h2 className="up-h2">{props.head}</h2>
            <p className="up-p">{props.body}</p>
        </div>
    )
}