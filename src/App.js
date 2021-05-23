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
                <BuyerRoute path='/CartProducts' component={CartProducts}/>
                <AdminRoute path='/AddRegistration' component={AddRegistration}/>

               
              </div>
          </div>

          <div>
            <Route path="/Privacy" component={Privacy}/>
            <Route path="/products/:productID" component={Details}/>
          </div>

          <div>
            <Footer/>
          </div>
          
        </BrowserRouter>
        </Provider>    
  );
  }


export default App;