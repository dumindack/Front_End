import React, {useState , useEffect} from 'react'
import axios from 'axios'
import './Order.css'
import CartNew from '../Cart/CartNew';



function CartDetails () {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);



  useEffect(() => {
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


    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
      if (localStorage.token) {
        const user= JSON.parse(atob(localStorage.token.split('.')[1]));
        if (user.role ==="Buyer"){
          axios.get(`https://cakeapi.azurewebsites.net/Api/Buyers/${user.id}`)
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


        return (
            <div className="Yorder">
                
                    <CartNew products={cart} changeQuantity={changeQuantity}/>
                             
            </div>
        )
}

export default CartDetails



       

