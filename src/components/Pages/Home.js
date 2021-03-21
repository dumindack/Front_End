import React, {useState, useEffect} from 'react';
import Imageslide from '../Imageslider'
import Products from '../Products/Products'


const Home = () => {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
     
        return (
            <div>
                <Imageslide/>

                <br/>
                <Products onAdd={onAdd}/>

                <br/>     
           
                <br/>
          </div>
        )
    }


export default Home
