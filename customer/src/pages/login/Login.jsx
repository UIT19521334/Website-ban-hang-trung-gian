import React ,{useState} from "react";
import { Link } from "react-router-dom";
import './login.css';
const Login = props => {
    const [User, SetUser] = useState("");
    const [Pass, SetPass] = useState("");
    const check =()=>{
        if (User === ""){
            alert("")
        }
    }
    const userHandleChange = e =>{
        SetUser(e.target.value);
    }
    const passHandleChange = e =>{
        SetPass(e.target.value);
    }
    return (
          <div className="login_form">
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input value={User} onChange={userHandleChange} name="username" type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input value={Pass} onChange={passHandleChange} name="password" type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <Link to = '/'>
                  <button  type="submit" onClick={check()} className="btn btn-primary btn-block">Submit</button>
                </Link>
                
                <p className="forgot-password text-right">
                    Forgot <Link to ="/fogotpassword">password?</Link>
                </p>
            </form>
          </div>
        );
}
    export default Login;