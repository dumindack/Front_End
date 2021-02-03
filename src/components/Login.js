import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Route,Router} from "react-router-dom";
import { login } from '../Actions/Auth';
import ReactDOM from 'react-dom'

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

    if (login(email, password)){
      console.log("If working")

      
      
      
        
       
    }
    else{
      console.log(" else working")
    }
    
    
};



  return (
    <Fragment>
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
          <input type="submit" className="btn" value="Login" />
        </form>
      </section>
    </Fragment>
  );
};

export default Login;