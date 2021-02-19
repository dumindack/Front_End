import React from 'react'
import './C.css'
import {Link} from 'react-router-dom'

const Card = ({data, addToCart, viewDetail, product, props}) => {
    return (
        <div>
            <div>
                <div >                 
                     <div className="card">
                        <Link to="/Pd">
                            <a href="/ProductDetails">
                                <img src={data.url}  className="card-image" alt="product" title={data.title} />
                            </a>
                        </Link>
                        <h3 className="card-title">{data.title}</h3>
                        <p className="price">Rs: {data.price}.00</p>
                        <div>
                            <button  className="card-button1" onClick={() => viewDetail(data)}>View</button>
                            <button href="#" className="card-button2" onClick={() => addToCart(data)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
