import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import './CSS/form.css';


import { registerBuyer } from '../Actions/Auth';



const Register = () => {
  const [formData, setFromData] = useState(
    {
        FirstName: '',
        LastName: '',
        Address: '',
        Gender: '',
        Email: '',
        MobileNumber: '',
        Password: '',
        Repasswerd: '',
        Role: 'Buyer',

    });

  const {FirstName, LastName, Address, Gender,Email,MobileNumber,Password,  Repasswerd,Role} = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

 const onSubmit = async e => {
   
    e.preventDefault();
    registerBuyer(FirstName, LastName, Address, Gender,Email,MobileNumber,Password, Repasswerd,Role);
    
    


};

  return (
    <Fragment>
      <h1 className="large ">User Registration</h1>
      <p className="lead">
        <i className="text-middle" />
      </p>



      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <small className="form-text">First Name</small>
          <input
            type="text"
            placeholder="First Name"
            name="FirstName"
            value={FirstName}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form-text"> Last Name</small>
          <input
            type="text"
            placeholder="Last Name"
            name="LastName"
            value={LastName}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>
        <div className="form-group">
          <small className="form-text"> Address</small>
          <input
            type="text"
            placeholder="Address"
            name="Address"
            value={Address}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>

        <div className="form-group">
          <small className="form-text"> Gender</small>
          <input
            type="text"
            placeholder="Gender"
            name="Gender"
            value={Gender}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>

        <div className="form-group">
          <small className="form-text"> Email</small>
          <input
            type="text"
            placeholder="Email"
            name="Email"
            value={Email}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>

        <div className="form-group">
          <small className="form-text">Mobile Number</small>
          <input
            type="text"
            placeholder="MobileNumber"
            name="MobileNumber"
            value={MobileNumber}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>



        <div className="form-group">
          <small className="form-text">Password</small>
          <input
            type="password"
            placeholder="Please enter minimum 6 digit Password "
            name="Password"
            value={Password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form-text">Confirm Password</small>
          <input
            type="password"
            placeholder="Re Enter Password"
            name="Repasswerd"
            value={Repasswerd}
            onChange={e => onChange(e)}
          />
        </div>
      
        
<div>
        <br/>
        <div className="form-group"> <input type="submit" className="btn btn-primary" value="Register As Buyer" /> </div>
        </div>
      </form>

      <p className="hv-acnt">
        If You have an account? <Link to="/login">Login</Link>
      </p>
    </Fragment>
  );
};




export default Register;