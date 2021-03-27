import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './ProductCSS/Card.css'

const Card = (props) => {
    const { product, onAdd } = props;
    
    
        return (
            <div>
                <div >                 
                     <div className="cards">
                        <Link to={`/products/${props.product.productID}`}>
                            <img src={props.product.imageSrc}  className="cards-image" alt="image/" />
                        </Link>
                        <div className="txt-area">
                            <div className="txt-area1">
                            <p className="cards-title">{props.product.productName}</p>
                            </div>
                        </div>
                        <p className="price">Rs: {props.product.price}.00</p>
                        <div>
                            <Link to={`/products/${props.product.productID}`}>
                                <button  className="cards-button1">View</button>
                            </Link>
                            <button className="cards-button2" onClick={() => onAdd(product)}>add to Cart </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    
} 

export default Card

