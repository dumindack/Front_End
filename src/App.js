import React, { Component } from 'react';
import './App.css';
import Navigationbar from './components/Navigationbar';
import { Route, BrowserRouter } from "react-router-dom";
import Home from './components/Pages/Home';
import Footer from '../src/components/Footer';
import Privacy from './components/Pages/Privacy';
import Login from './components/Login';
import Register from './components/Register';


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
               
              </div>
          </div>
          
          <div>
          <Route path="/Privacy">
              <Privacy/>
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