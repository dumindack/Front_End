import React from 'react'

const CartItem = ({product, changeQuantity}) => {
    return (
        <div className="cart-container">
            <div className="cart-item">
                <img src={product.url} alt="cart-item" className="cart-item-image" />
                <div>
                    <div>
                        <p className="item-title">{product.title}</p>
                        <span className="cart-item-price">Rs: {product.price}.00</span>
                    </div>
                    <div>
                        <h1 className="item-title">category: {product.category}</h1>
                    </div>
                    <div>
                        <p className="item-quantity">Quantity: <span>{product.quantity}</span></p>
                        <div>
                            <button className="quantity-btn" onClick={() => changeQuantity(product, '-')}>-</button>
                            <button className="quantity-btn" onClick={() => changeQuantity(product, '+')}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
