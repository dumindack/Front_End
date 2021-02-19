import React, { useState, useEffect } from 'react'
import Cart from './Cart';
import FilterList from './FilterList'




const CartProducts = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(FilterList([], null));
        if(JSON.parse(localStorage.getItem("cart"))) {
          setCart(JSON.parse(localStorage.getItem("cart")));
        }
      }, [])

    const changeQuantity = (item, e) => {
        const productList = [...cart];
        const index = productList.indexOf(item);
        if(e === '+') {
          productList[index].quantity++;
        }
        else {
          if(productList[index].quantity > 1) {
            productList[index].quantity--;
          }
          else {
            productList.splice(index, 1);
          }
        } 
        setCart(productList);
        localStorage.setItem("cart", JSON.stringify(productList));
      }
  
      
    return (
        <div className="c-header">
            YOUR CART
            <Cart products={cart} changeQuantity={changeQuantity} />
        </div>
    )   
}


export default CartProducts