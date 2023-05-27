import React from "react";
import updata from "./updata";
import Up from "./up";
import "../index.css"

export default function Upside(){
    const upElements = updata.map(theData=>{
        return <Up 
            key={theData.id}
            image= {theData.image}
            head ={theData.head}
            body ={theData.body}
        />
    } )
    return(
        <div className="upside">
            <div className="upside-grid">
                {upElements}
            </div>
        </div>
    )
}