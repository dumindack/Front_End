import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../Media/logo/logo1.png';
import './CSS/Navigationbar.css';
import Carticon from '../Media/icon/carticon.svg';
import { Link } from "react-router-dom";
import { logout } from "../Actions/Auth";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";



var isBuyer = localStorage.getItem("Role") === "Buyer";


const Navigationbar = ({ auth: { isAuthenticated ,loading, user }, logout }) =>{

  
  const authLinks = (
    <div class="custom-container">
        <nav class="navbar navbar-expand-sm navbar-custom">
            <div className="logo1">
                <img  src={icon}   width="220" />
            </div>
        
              
              <Link to="/" class="navbar-brand">Home</Link>

              <div class="navbar-collapse collapse" id="navbarCustom">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/About" class="navbar-brand">About</Link>
                    </li> 
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/upload_product/ProductList"  class="navbar-brand">My Products</Link>
                    </li> 
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/ProductList"  class="navbar-brand">Gifts</Link>
                    </li> 
                </ul>

              </div>



              <div class="topnav">
              <div class="topnav-right">

              <ul className="nav-item">

                <li>
                  <Link to="/DeliveryInfo">Delivery Info</Link>
                </li>


                <li>
                  <a onClick={logout} href="#!">
                      <span className="fa fa-fw fa-user">_Logout</span>
                  </a>
                </li>

                <li>
                  { isBuyer && <Link to="/CartProducts">
                    <img  className="cart-icon" src={Carticon} alt="/"  width="35px"/> 
                  </Link>}
                </li> 

              </ul> 
                

              </div>
              
            </div>


    
     
      </nav>
      </div>
  );



  const adminLinks = (
    <div class="custom-container">
        <nav class="navbar navbar-expand-sm navbar-custom">
            <div className="logo1">
                <img  src={icon}   width="220" />
            </div>
             
              <Link to="/" class="navbar-brand">Home</Link>

              <div class="navbar-collapse collapse" id="navbarCustom">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/GetSellers" class="navbar-brand">Sellers</Link>
                    </li> 
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/GetBuyers"  class="navbar-brand">Buyers</Link>
                    </li> 
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to= "/AddRegistration" class = "navbar-brand">Add</Link>
                    </li> 
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to= "/Accept/AcceptList" class = "navbar-brand">Products</Link>
                    </li> 
                </ul>

              </div>

              
              <div class="topnav">
                <div class="topnav-right">
                <ul className="nav-item">
                  <li>
                    <a onClick={logout} href="#!">
                        <span className="fa fa-fw fa-user">_Logout</span>
                    </a>
                  </li>
                </ul> 
                </div>
            </div>
      </nav>
      </div>
  );

  const guestLinks = (
  <div class="custom-container">
  
        <nav class="navbar navbar-expand-sm navbar-custom">

          <div className="logo1">
            <img  src={icon}   width="220" />
          </div>
          
            <Link to="/" class="navbar-brand ">Home</Link>
           
            <div class="navbar-collapse collapse" id="navbarCustom">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <Link to="/About" class="nav-link">About</Link>
                    </li> 
                </ul>
            </div>
            
            
       
            <div class="topnav">
              <div class="topnav-right">

              <ul className="nav-item">

                <li>
                  <Link to="/DeliveryInfo">Delivery Info</Link>
                </li>

                <li>
                  <Link to="/Selection">Register</Link>
                </li>

                <li>
                  <Link to="/Login" className="fa fa-fw fa-user">_Login</Link> 
                </li>

                <li>
                  <Link to="/CartProducts">
                    <img  className="cart-icon" src={Carticon} alt="/"  width="35px"/> 
                  </Link>
                </li> 

              </ul> 
                

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
      <Fragment>  {isAuthenticated && !loading ? ((user.role=='Admin') ? adminLinks:authLinks):guestLinks}</Fragment>
      </Fragment>
    </nav>
  );
     };

           
                
        


Navigationbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
   user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navigationbar);



