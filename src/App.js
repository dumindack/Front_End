import React, { Component } from 'react';
import './App.css';
import Navigationbar from './components/Navigationbar';
import { Route, BrowserRouter } from "react-router-dom";
import Home from './components/Pages/Home';
import Footer from '../src/components/Footer'


  class App extends Component{
    render(){
      return (
        <BrowserRouter>
          <div>
            <Navigationbar/>
              <div>
                <Route exact path='/' component={Home}/>
              </div>
          </div>
          


          
          <div>
            <Footer/>
          </div>
          
        </BrowserRouter>    
  );
  }
}

export default App;