
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../Media/logo/logo.png';
import './CSS/Navigationbar.css'
import text from '../Media/logo/text.png'
import Carticon from '../Media/icon/carticon.svg'
import { Link } from "react-router-dom";
import { logout } from "../Actions/Auth";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import React, { Fragment } from "react";







const Navigationbar = ({ auth: { isAuthenticated ,loading, user }, logout }) =>{
  const authLinks = (
    <div class="custom-container">
        <nav class="navbar navbar-expand-sm navbar-custom">
        <div class="topnav">
              <div class="topnav-right">
              <Link to="/" class="navbar-brand">Home</Link>
              <Link to="/About" class="nav-link">About</Link>
              <Link to="/upload_product/ProductList">My Profile</Link>

                
                <Link to="/DeliveryInfo">Delivery Info</Link>
       
                  <div className="carticon">
                    
                    <div>
                      <Link to="/CartProducts">
                      <img src={Carticon} alt="/"  width="30px"/> 
                      </Link>
                     
                    </div>
                </div>
                
   
      
        <a onClick={logout} href="#!">
        <span >Logout</span>
          </a>
        
     </div>
     </div>
      </nav>
      </div>
  );
  const guestLinks = (
<div class="custom-container">
        <nav class="navbar navbar-expand-sm navbar-custom">
            <Link to="/" class="navbar-brand">Home</Link>
           
            <div class="navbar-collapse collapse" id="navbarCustom">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <Link to="/About" class="nav-link">About</Link>
                    </li> 
                </ul>
            </div>
            
            
       
            <div class="topnav">
              <div class="topnav-right">

         
                <Link to="/Login">Login</Link>
                
                
                <Link to="/Register">Register</Link>
                
                
                <Link to="/DeliveryInfo">Delivery Info</Link>
                
                
               
               
                
              </div>
            </div>
            );
            </nav>
        <div>
                  
        </div>
    </div>
  ) 

            
     return (
    <nav className="navigationbar">
      <h1>
        <Link to="/">
         
        </Link>
      </h1>
      <Fragment>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </Fragment>
    </nav>
  );
     };

           
                
        


Navigationbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navigationbar);