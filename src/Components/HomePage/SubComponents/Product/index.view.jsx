import React from 'react'

import allProducts from "./index.data"

import "./index.css"

const ProductCard = () => {
    const eachProductCard= (productList)=>{
        return productList.map(eachProduct=>{
            const cardStyle = {
                backgroundImage: `url(${eachProduct.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
            return (
                <div className="eachProductCard" style ={cardStyle}>
                    <div className="textArea">
                        <div className="mainTitle">{eachProduct.title}</div>
                        <div className="subTitle">{eachProduct.subtitle}</div>
                        <div className="description">{eachProduct.description}</div>
                        <button type="button" class="btn btn-light product-button">{eachProduct.buttonText}</button>

                    </div>
                    <div className="imageArea">
                        <img src={eachProduct.mainPic} alt="productImage" className="productImage"/>
                        <p className="imageDescription">
                            {eachProduct.pictureName} 
                            <br/>
                            {eachProduct.picturePosition}
                        </p>
                    </div>
                </div>
            )
            
        })
    }
    
    return (
        <section id="ListOfProducts">
            {eachProductCard(allProducts)}
        </section>
    )
}

export default ProductCard
