import React, { Component } from 'react';
import './App.css';
import Navigationbar from './components/Navigationbar';
import { Route, BrowserRouter } from "react-router-dom";
import Home from './components/Pages/Home';
import Footer from '../src/components/Footer';
import Privacy from './components/Pages/Privacy';
import Login from './components/Login';
import Register from './components/Register';
import CartProducts from './components/Products/CartProducts'
import GetSellers from './components/Admin/GetSellers';
import Admin from './components/Admin/Admin';
import GetCakes from './components/Admin/GetCakes';
  class App extends Component{
    render(){
      return (
        <BrowserRouter>
          <div>
            <Navigationbar/>
              <div>
                <Route exact path='/' component={Home}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Register' component={Register}/>
                <Route path='/GetSellers' component={GetSellers}/>
                <Route path='/Admin' component={Admin}/>
                <Route path='/GetCakes' component={GetCakes}/>
               

               
              </div>
          </div>
          
          <div>
          <Route path="/Privacy">
              <Privacy/>
            </Route>
          </div>
          <div>
          <Route path="/CartProducts">
            <CartProducts/>
          </Route>
        </div>
        
          
          <div>
            <Footer/>
          </div>
          
        </BrowserRouter>    
  );
  }
}

export default App;