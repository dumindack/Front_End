import React from 'react';
import './CartCSS/Cart.css'
import './CartCSS/CartNew.css'

const CartItem = ({product, changeQuantity}) => {

    
    return (
        <div>
     
      <tr>
        <td><img src={product.imageSrc}  className="or-cart-items-image" alt="image/" /></td>
        <tr>
            <td>{product.productName}</td>
        </tr>
        <tr>
            <td>(x1)   Rs: {product.price}.00</td>
        </tr>
        <tr>
            <td>Quantity: {product.quantity}</td>
        </tr>
      </tr>
        </div>
    )
}

export default CartItem;
