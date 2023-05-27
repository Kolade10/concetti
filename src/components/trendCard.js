import React from "react";
import "../index.css"

export default function TrendCard(props){
    return(
        <div className="trend-box">
            <img src={props.images}/>
            <h2>{props.head}</h2>
            <p>{props.body}</p>
        </div>
    )
}