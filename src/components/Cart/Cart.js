import React, {useState , useEffect, Fragment} from 'react'
import axios from 'axios'
import CartItem from './CartItem'
import { Link } from "react-router-dom";



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
    localStorage.setItem("CartQuantity", cartItemsLength);


    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
      if (localStorage.token) {
        const user= JSON.parse(atob(localStorage.token.split('.')[1]));
        if (user.role ==="Buyer"){
          axios.get(`https://cakeworldapi.azurewebsites.net/Api/Buyers/${user.id}`)
            .then(resp => {
            setBuyers(resp.data)
            console.log(resp.data);
        })
        .catch(err => {
            console.error(err);
        });
        }else{
          console.log(`error`)
        }
      }
    }, []);

    const users = { id: `${buyers.id}` ,token: `${localStorage.getItem('token')}` };
    const isLog = users.token !== 'null';
    const isBuyer = users.id >= 0;
    const notLog = users.token === 'null';

    
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
                                <Link to="/Order">
                                    <a>{isLog && isBuyer && <a><button className="payment-btn">Order Now</button></a>}</a> 
                                </Link>
                                <Link to="/Login">
                                    <a>{notLog && <a><button className="payment-btn">To complete the order, please Login here</button></a>}</a>
                                </Link>
                                <div>
                    
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
        
    )
    
}


export default Cart;
