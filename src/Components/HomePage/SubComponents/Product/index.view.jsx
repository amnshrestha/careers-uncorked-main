import React from 'react'

import allProducts from "./index.data"

import "./index.css"

const ProductCard = () => {
    const logoSection = (logoList) =>{
        return (
            logoList.map(eachLogo=>{
                return (
                    <a href={eachLogo.logoLink} target="_blank">
                        <img src={eachLogo.logoImage} alt="eachLogo" className="smallLogo"/>
                    </a>
                )
            })
        )
    }
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

                        {eachProduct.subtitle && 
                        <div className="subTitle">{eachProduct.subtitle}</div>
                        }

                        {eachProduct.description && 
                        <div className="description">{eachProduct.description}</div>
                        }

                        {eachProduct.logos &&
                            <div className="listOfLogos">
                                {logoSection(eachProduct.logos)}
                            </div>
                        }

                        {eachProduct.newTab ?
                        <a href={eachProduct.buttonLink} target="_blank">
                            <button type="button" class="btn btn-light product-button">{eachProduct.buttonText}</button>
                        </a>:
                        <a href={eachProduct.buttonLink} >
                            <button type="button" class="btn btn-light product-button">{eachProduct.buttonText}</button>
                        </a>
                        }

                        

                    </div>
                    <div className="imageArea">
                        <img src={eachProduct.mainPic} alt="productImage" className="productImage"/>
                        {eachProduct.pictureName &&
                        eachProduct.picturePosition &&
                            <p className="imageDescription">
                                {eachProduct.pictureName} 
                                <br/>
                                {eachProduct.picturePosition}
                            </p>
                        }
                    </div>
                </div>
            )
            
        })
    }

    const eachProductCardMobile= (productList)=>{
        return productList.map(eachProduct=>{
            const cardStyle = {
                backgroundImage: `url(${eachProduct.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }
            return (
                <div className="eachProductCard" style ={cardStyle}>
                    <div className="mainTitle">{eachProduct.title}</div>
                    
                    {eachProduct.subtitle && 
                    <div className="subTitle">{eachProduct.subtitle}</div>
                    }

                    
                    <div className="eachProductImage">
                        <img src={eachProduct.mainPic} alt="productImage" className="productImage"/>
                    </div>

                        {eachProduct.pictureName &&
                            eachProduct.picturePosition &&
                                <p className="imageDescription">
                                    {eachProduct.pictureName} 
                                    <br/>
                                    {eachProduct.picturePosition}
                                </p>
                        }

                        {eachProduct.description && 
                        <div className="description">{eachProduct.description}</div>
                        }

                        {eachProduct.logos &&
                            <div className="listOfLogos">
                                {logoSection(eachProduct.logos)}
                            </div>
                        }

                        <div className="buttonMobile">
                        {eachProduct.newTab ?
                        <a href={process.env.PUBLIC_URL +eachProduct.buttonLink} target="_blank">
                            <button type="button" class="btn btn-light product-button">{eachProduct.buttonText}</button>
                        </a>:
                        <a href={process.env.PUBLIC_URL +eachProduct.buttonLink} >
                            <button type="button" class="btn btn-light product-button">{eachProduct.buttonText}</button>
                        </a>
                        }
                        </div>
                </div>
            )
            
        })
    }
    
    return (
        <>
        <section id="ListOfProducts">
            {eachProductCard(allProducts)}
        </section>

        <section id="ListOfProductsMobile">
            {eachProductCardMobile(allProducts)}
        </section>
        </>
    )
}

export default ProductCard
