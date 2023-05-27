import React from "react";
import Arrow from "../images/arrow.png"
import "../index.css"

export default function Shop(){
    return(
        <div className="shop-container">
            <h1>
                Beautiful Color Contrast!
            </h1>
            <p>
                Over 50 Collections to Choose for !
            </p>
            <button>
                Shop now <img src={Arrow} alt=""/>
            </button>
        </div>
    )
}