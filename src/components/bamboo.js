import React from "react";
import Towel from "../images/brown-back.png"
import Right from "../images/arrow-white.png"
import "../index.css"

export default function Bamboo(){
    return(
        <div className="bamboo">
            <div className="organic">
                <h1>Organic Cotton and Bamboo</h1>
                <p>Designed to please you with the best of Turkish’s heritage in fabrics.Made from bamboo and cotton fibers, these towels gathers the best from two worlds to offer soft, super-absorbent fabric that is also antibacterial thanks to the natural properties of bamboo.</p>
                <button className="organic-butt">
                    Shop now <img src={Right} alt=""/>
                </button>
            </div>
            <div className="towel">
                <img src={Towel} alt=""/>
            </div>
        </div>
    )
}