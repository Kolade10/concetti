import React from "react";
import Location from "../images/location.png"
import Phone from "../images/phone.png"
import Visa from "../images/visa.png"
import Discover from "../images/discover.png"
import American from "../images/amexp.png"
import Master from "../images/master-card.png"
import Jcb from "../images/jcb.png"
import Blue from "../images/blue-logo.png"
import Paypal from "../images/paypal.png"
import Message from "../images/message.png"
import "../index.css"

export default function Footer(){
    return(
        <div className="footer">
            <div className="foot-box-1">
                <h1 className="foot-head">
                    Quick Links
                </h1>
                <ul>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Return policy</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="foot-box-2">
                <h1 className="foot-head">
                    Contact Us
                </h1>
                <ul>
                    <li><img src={Location} alt=""/><a href="#">8385 South Allen Street, Suite 111, Sandy UT 84070</a> </li>
                    <li><img src={Phone} alt=""/> <a href="#">801-462-6210</a> </li>
                    <li><img src={Message} alt=""/> <a href="#">Support@concetti-di-lusso.com</a> </li>
                </ul>
            </div>
            <div className="foot-box-3">
                <h1 className="foot-head">
                    We Accept
                </h1>
                <div className="accept-grid">
                    <img src={Visa} alt=""/>
                    <img src={Discover} alt=""/>
                    <img src={American} alt=""/>
                    <img src={Master} alt=""/>
                    <img src={Jcb} alt=""/>
                    <img src={Blue} alt=""/>
                    <img src={Paypal} alt=""/>
                </div>
                <hr className="hr"/>
                <p className="close">© 2020, Concetti Di-Lusso Powered by Shopify</p>
            </div>
        </div>
    )
}