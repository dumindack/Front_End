import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../Media/logo/logo.png';
import './CSS/Navigationbar.css'
import text from '../Media/logo/text.png'
import Carticon from '../Media/icon/carticon.svg'


const Navigationbar = () =>{
return(
<div class="custom-container">
        <nav class="navbar navbar-expand-sm navbar-custom">
            <a class="navbar-brand" href="#">
              <a class="box">
              <img
                  src={icon}
                  height="55"
                  width="auto"
              />
              </a>
            </a>
            <a href="/" class="navbar-brand">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
                <i class="fa fa-bars fa-lg py-1 text-white"></i>
            </button>
            <div class="navbar-collapse collapse" id="navbarCustom">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a class="nav-link" href="/About">About</a>
                    </li>
                    <li class="nav-item dropdown">
                    <NavDropdown title="Choose From" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Birthday Cakes</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Cup Cakes</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Wedding Cakes</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Other Design Cakes</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                    </NavDropdown>
                    </li>
                </ul>
                <form class="d-flex input-group w-auto" >
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search for cakes"
                    aria-label="Search"
                  />
                  <button
                    class="search-button"
                    type="button"
                    data-mdb-ripple-color="dark">
                    Search
                  </button>
                </form>

            </div>

            <div class="topnav">
              <div class="topnav-right">
                <a href="/Login">Login</a>
                <a href="/Register">Register</a>
                <a href="#">My Profile</a>
              </div>
            </div>
            <div>
                  <div className="carticon">
                    
                    <div>
                      <a href="/CartProducts">
                      <img src={Carticon} alt="/"  width="30px"/>  
                      </a>
                    </div>
                </div>
                </div>
                
        </nav>
        <div>
                  
        </div>
    </div>
      )
}

export default Navigationbar