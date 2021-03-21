import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './ProductCSS/Card.css'

const Card = (props) => {
    const { product, onAdd } = props;
    
    
        return (
            <div>
                <div >                 
                     <div className="card">
                        <Link to={`/products/${props.product.productID}`}>
                            <img src={props.product.imageSrc}  className="card-image" alt="image/" />
                        </Link>
                        <div className="txt-area">
                            <div className="txt-area1">
                            <p className="card-title">{props.product.productName}</p>
                            </div>
                        </div>
                        <p className="price">Rs: {props.product.price}.00</p>
                        <div>
                            <Link to={`/products/${props.product.productID}`}>
                                <button  className="card-button1">View</button>
                            </Link>
                            <button className="card-button2" onClick={() => onAdd(product)}>add to Cart </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    
} 

export default Card

