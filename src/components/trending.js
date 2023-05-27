import React from "react";
import trendingData from "./trendingData";
import TrendCard from "./trendCard";
import "../index.css"

export default function Trend(){
    const trendElement = trendingData.map(trendItem=>{
        return <TrendCard
            key={trendItem.id}
            images={trendItem.image}
            head={trendItem.head}
            body={trendItem.body}
        />
    })
    return(
        <div className="trending">
            <h1 className="featured-head">
                Trending Product
            </h1>
            <div className="trending-grid">
                {trendElement}
            </div>
            <button className="feature-button">
                SHOP NOW
            </button>
        </div>
    )
}