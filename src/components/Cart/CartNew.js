import React, { Fragment, useState, useEffect } from 'react';
import CartNew from './CartNew'
import '../Order/OrderCSS/Or.css'



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

    
    const deliverCost = 500;
    const totalPrice = sum + deliverCost;
    localStorage.setItem("total", totalPrice);
    
    return (
        
            <div>
                <br/>
                            <table>
                            <tr>
                                <th colspan="2">Cart Cakes</th>
                            </tr>
                            <tr>
                            {
                            products.map(product => {
                                return (
                                    <CartNew 
                                        key={product.id} 
                                        product={product} 
                                        changeQuantity={changeQuantity} 
                                         />
                                )
                            })
                        }
                            </tr>
                            <br/>
                            <tr>
                                <td>No. of Cart Items: </td>
                                <td>{localStorage.getItem("CartQuantity")}</td>
                            </tr>
                            <tr>
                                <td>Sub Total: </td>
                                <td>Rs: {sum.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Delivery Cost: </td>
                                <td>Rs: {deliverCost.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Total Price: </td>
                                <td>Rs: {totalPrice.toFixed(2)}</td>
                            </tr>
                            </table>
                            <br></br>                      
                            
                        </div>

        
    )
}

export default Cart;