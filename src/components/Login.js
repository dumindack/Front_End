import React, { Fragment, useState } from "react";
import { login } from '../Actions/Auth';
import './CSS/form.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {  Redirect } from "react-router-dom";
import { setAlert } from '../Actions/alert';




const Login = ({ login, isAuthenticated, user }) => {
  const [formData, setFromData] = useState(
      {
          email: '',
          password: '',
      }
  );

  const { email, password } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    
    e.preventDefault();
    if (email && password) {
    login(email, password)
    }
    else{
      setAlert('Please fill all the fileds','warning');
    }
};
if (isAuthenticated) {
  if (user.role === "Admin")
    return <Redirect to="/Admin" />;
  else if (user.role === "Seller")
    return <Redirect to="/upload_product/ProductList" />
  else
    console.log(user.role);
}



  return (
    <Fragment>

      <h1 className="large ">User Login</h1>
      <section className="container">
     
       <form className="form"  onSubmit={e => onSubmit(e)}>
         
            <div className="form-group">
              <small className="form-text"> Email</small>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => onChange(e)}
              />
            </div>
          <div className="form-group">
            <small className="form-text"> Password</small>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-log" value="Login" />
        </form>
      </section>
    </Fragment>
  );
};


Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert:PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { login ,setAlert })(Login);