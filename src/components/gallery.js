import React from "react";
import Pink from "../images/pink-stack.png"
import Flower from "../images/flower-stack.png"
import Middle from "../images/flower-tow.png"
import Grey from "../images/grey-stack.png"
import Purple from "../images/purple-stack.png"
import "../index.css"

export default function Gallery(){
    return(
        <div className="gallery">
            <h1 className="featured-head">
                Product Gallery
            </h1>
            <div className="gallery-grid">
                <div className="side-grid">
                    <img src={Pink} alt=""/>
                    <img src={Flower} alt=""/>
                </div>
                <img className="middle" src={Middle} alt=""/>
                <div className="side-grid">
                <img src={Purple} alt=""/>
                <img src={Grey} alt=""/>
                </div>
            </div>
        </div>
    )
}