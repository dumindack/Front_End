import React, {useState, useEffect} from 'react';
import Imageslide from '../Imageslider'
import Products from '../Products/Products';
import FilterList1 from '../Products/Filterlist1';




const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedCategorys, setSelectedCategorys] = useState([]);
    const [cart, setCart] = useState([]);
    const [details, setDetails] = useState([]);
  
    useEffect(() => {
      setProducts(FilterList1([], null));
      if(JSON.parse(localStorage.getItem("cart"))) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    }, [])

 
  
    const setCategory = (category) => {
      const categorys = [...selectedCategorys];
      
      if(categorys.includes(category)) {
        const index = categorys.indexOf(category);
        categorys.splice(index, 1);
      }
      else {
        categorys.push(category);
      }
      
      setProducts(FilterList1(categorys, 'category'));
    }
  
    const sortProducts = (category) => {
     
      const categorys = [...selectedCategorys];
      
      if(categorys.includes(category)) {
        const index = categorys.indexOf(category);
        categorys.splice(index, 1);
        
      }
      else {
        categorys.push(category);
      }
      setProducts(FilterList1(categorys, 'category'));
      
    }
  
    const addToCart = (item) => {
      const productList = [...cart];
      if(!productList.includes(item)) {
        productList.push(item);
      }
      const index = productList.indexOf(item);
      productList[index].quantity++;
      setCart(productList);
      localStorage.setItem("cart", JSON.stringify(productList));
    }



    const viewDetails = (item) => {
      const productList = [...details];
      if(!productList.includes(item)) {
        productList.push(item);
      }
      
      setDetails(productList);
      
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

                <hr/>

                <br/>

                <div>
                  <Products products={products} sortProducts={sortProducts} addToCart={addToCart} viewDetail={viewDetails}  />
                </div>       
          </div>
        )
    }


export default Home
