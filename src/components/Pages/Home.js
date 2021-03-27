import React, {useState, useEffect} from 'react';
import Imageslide from '../Imageslider'
import Products from '../Products/Products'


const Home = () => {

  const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [details, setDetails] = useState([]);
 
   
    useEffect(() => {
      if(JSON.parse(localStorage.getItem("cart"))) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    }, [])


    const addToCart = (item) => {
    
     const productList = [...cart];
        
          if(!productList.includes(item)) {
            productList.push(item);
          
        }else{
              alert("This product has been already added to cart.")
          };
        
        
        const index = productList.indexOf(item);
        productList[index].quantity++;
        setCart(productList);
        localStorage.setItem("cart", JSON.stringify(productList));
        
    }


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
            <div>
                <Imageslide/>

                <br/>
                <Products addToCart={addToCart}/>

                <br/>     
           
                <br/>
          </div>
        )
    }


export default Home
