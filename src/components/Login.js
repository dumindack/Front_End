import React, { Fragment, useState } from "react";
import { login } from '../Actions/Auth';
import './CSS/form.css';


const Login = () => {
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

    login(email, password)
};



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

export default Login;