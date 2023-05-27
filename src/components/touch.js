import React from "react";
import "../index.css"

export default function Touch(){
    return(
        <div className="touch">
           <h1 className="featured-head">
                Get In Touch
           </h1>
           <p className="touch-body">
           Subscribe to our weekly newsletter and receive exclusive offers on products you love!
           </p>
           <div className="mail-grid">
                <input className="email" type="email" placeholder="Email Address"/>
                <button>SUBSCRIBE</button>
           </div>
        </div>
    )
}