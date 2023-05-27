import React from "react";
import featureData from "./featureData";
import "../index.css"
import Product from "./products";

export default function Featured(){
    const prodData = featureData.map(prodItem =>{
        return <Product
         key={prodItem.id}
         image={prodItem.image}
         descript={prodItem.descrip}
         price={prodItem.price}
         discount={prodItem.discount}
        />
    })
    return (
        <div className="featured">
            <h1 className="featured-head">
                Featured Product
            </h1>
                <div className="featured-body">
                    <div className="explore">
                        <h1 className="product-head">
                            Explore More Products
                        </h1>
                    </div>
                    <div className="products">
                        {prodData}
                    </div>
                </div>
                <button className="feature-button"> SHOW MORE</button>
        </div>
    )
}