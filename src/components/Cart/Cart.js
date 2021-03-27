import React, { Fragment, useState, useEffect } from 'react'
import CartItem from './CartItem'



const Cart = ({products, changeQuantity}) => {

    const [classActive, toggleClass] = useState(false);
    const [sum, setSum] = useState(0);

    const toggleButton = () => {
        toggleClass(!classActive);
    }

    useEffect(() => {
        let total = 0;
        for(var i = 0; i < products.length ; i++) {
            total+= products[i].price*products[i].quantity;
        }
        setSum(total);
    }, [products])

    const checkout = () => {
        if(localStorage.getItem('token') !== null)
        {alert(`Checkout - Subtotal: Rs:${sum.toFixed(2)}`)}
        else{ alert('please login')}
    }
    
    const cartItemsLength = products.length;

    return (
        <Fragment>
            <div  className={classActive ? "active" : ""}>
                <div className="cart-content">
                    <div className="cart-list">
                        {
                            products.length === 0 
                            ? 
                            <div className="cart-container">
                                <div className="empty-cart">
                                    <p>There are no items in Cart, Please add items to checkout!!!</p>
                                </div> 
                            </div>
                            :
                            products.map(product => {
                                return (
                                    <CartItem 
                                        key={product.id} 
                                        product={product} 
                                        changeQuantity={changeQuantity} 
                                         />
                                )
                            })
                        }
                    </div>

                    <div className="cart-container">
                        <div className="checkout-div">
                            <div className="checkout">
                                    <div className="subtotal-div">
                                        <p className="subtotal">SUBTOTAL</p>
                                        <p className="subtotal-price">Rs: {sum.toFixed(2)}</p>
                                    </div>
                                <button className="checkout-btn" onClick={checkout}>CHECKOUT</button>
                                <button className="payment-btn">Payment</button>
                            </div>
                            <div>{cartItemsLength}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;