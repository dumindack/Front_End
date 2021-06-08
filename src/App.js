import React, { Component } from 'react';
import './App.css';
import Navigationbar from './components/Navigationbar';
import { Route, BrowserRouter } from "react-router-dom";
import Home from './components/Pages/Home';
import Footer from '../src/components/Footer';
import Privacy from './components/Pages/Privacy';
import Login from './components/Login';
import Register from './components/Register';
import Register1 from './components/Register1';
import Details from './components/Products/Details';
import GetSellers from './components/Admin/GetSellers';
import Admin from './components/Admin/Admin';
import GetBuyers from './components/Admin/GetBuyers';
import DeliveryInfo from './components/DeliveryInfo';
import About from './components/Pages/About';
import ProductList from './components/upload_product/ProductList'
import store from "./store";
import { Provider } from "react-redux";
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import SellerRoute from './components/routing/SellerRoute';
import BuyerRoute from './components/routing/BuyerRoute';
import Alert from "./components/Layout/Alert";
import {loadUser} from './Actions/Auth'
import  { useEffect } from 'react';
import Selection from './components/Selection';
import CartProducts from './components/Cart/CartProducts';
import AddRegistration from './components/AddRegistration';
import AcceptList from './components/Accept/AcceptList';
import Order from './components/Order/Order';
import Checkout from './components/Payment/Checkout';
import Receipt from './components/Receipts/Receipt';
import CoD from './components/Receipts/CoD';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Productlist from './components/Productlist';
import Details1 from './components/Details1';
import GiftCart from './components/GiftCart';





  const App = ()=>{
    useEffect(()=>{
      store.dispatch(loadUser())
    }, []) 
    
      return (
        <Provider store={store}>
        <BrowserRouter>
          <div>
          <Route exact render={props=> <Navigationbar {...props}/>}/>
            <Alert />
              <div>
                <PrivateRoute exact path='/' component={Home}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Register' component={Register}/>
                <AdminRoute path='/GetSellers' component={GetSellers}/>
                <AdminRoute path='/GetBuyers' component={GetBuyers}/>
                <Route path='/DeliveryInfo' component={DeliveryInfo}/>
                <Route path='/About' component={About}/>
                <SellerRoute path='/upload_product/ProductList' component={ProductList}/>
                <Route path='/Register1' component={Register1}/>
                <Route path='/Selection' component={Selection}/>
                <Route path='/Details1' component={Details1}/>
                <Route path='/CartProducts' component={CartProducts}/>
                <AdminRoute path='/AddRegistration' component={AddRegistration}/>
                <AdminRoute path='/Accept/AcceptList' component={AcceptList}/>
                <Route path='/Product' component={Product}/>
                <Route path='/Productlist' component={Productlist}/>
                <Route path='/GiftCart' component={GiftCart}/>

               

               
              </div>
          </div>

          <div>
            <Route path="/Privacy" component={Privacy}/>
            <Route path="/products/:productID" component={Details}/>
          </div>

          <div>
            <Route path="/Order" component={Order}/>
            <Route path="/Checkout" component={Checkout}/>
            <Route path="/Receipt" component={Receipt}/>
            <Route path="/CoD" component={CoD}/>
          </div>

          <div>
            <Footer/>
          </div>
          
        </BrowserRouter>
        </Provider>    
  );
  }


export default App;