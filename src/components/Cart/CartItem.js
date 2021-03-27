import React from 'react';
import './CartCSS/Cart.css'

const CartItem = ({product, changeQuantity}) => {
    return (
        <div className="cart-container">
            <div className="cart-items">
            <img src={product.imageSrc}  className="cart-items-image" alt="image/" />
                <div>
                    <div>
                        <p className="item-title">{product.productName}</p>
                        <span className="cart-item-price">Rs: {product.price}.00</span>
                    </div>
                    <div>
                        <h1 className="item-title">category: {product.category}</h1>
                    </div>
                    <div>
                        <p className="item-quantity">Quantity: <span>{product.quantity}</span></p>
                        <div>
                            <button className="quantity-btn" onClick={() => changeQuantity(product, '-')}>-</button>
                            <span className="item-quantity">{product.quantity}</span>
                            <button className="quantity-btn" onClick={() => changeQuantity(product, '+')}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
