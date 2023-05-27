import React from "react";
import Logo from "../images/logo.png"
import Phone from "../images/phone.png"
import Message from "../images/message.png"
import Location from "../images/location.png"
import Search from "../images/search.png"
import Like from "../images/like.png"
import Cart from "../images/cart.png"

import "../index.css"

export default function Nav(){
    return(
        
        <nav>
            <div className="top-nav">
                <div className="phone">
                    <img src={Phone} alt=""/>
                    <p className="num">801-462-6210</p>
                </div>
                <div className="mail">
                    <img src={Message} alt=""/>
                    <p className="message">Support@concetti-di-lusso.com</p>
                </div>
                <p className="free">
                FREE SHIPPING! Orders $35+
                </p>
                <div className="location">
                    <img src={Location} alt=""/>
                    <p className="locate">8385 South Allen Street, Suite 111, Sandy UT 84070</p>
                </div>
            </div>
            <div className="down-nav">
                <img className="logo" src={Logo} alt=""/>
                <div className="nav-list">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Towel</a></li>
                        <li><a href="#">Robes</a></li>
                        <li><a href="#">Bathroom sets</a></li>
                    </ul>
                </div>
                <div className="nav-icon">
                    <div className="icon-box">
                        <img  src={Search} alt=""/>
                    </div>
                    <div className="icon-box">
                        <img  src={Like} alt=""/>
                    </div>
                    <div className="icon-box">
                        <img  src={Cart} alt=""/>
                    </div>
                </div>
                <button className="sign-up">sign up</button>
            </div>
        </nav>
    )
}