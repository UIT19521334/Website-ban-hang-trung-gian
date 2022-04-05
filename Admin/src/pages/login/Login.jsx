import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login.css'
const Login = props => {
        return (
          <div className="login_form">
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <Link to = '/admin'>
                  <button  type="submit" onClick={props.setIsAuticated} className="btn btn-primary btn-block">Submit</button>
                </Link>
                
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
          </div>
        );
    }
    export default Login;