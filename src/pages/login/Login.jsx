import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
const Login = props => {

  return (
      <div className="login-form">
        <div className="row">
          <div className="username">
            <p> User name </p>
            <input type="text" placeholder='User name' />
          </div>
          <div className="password">
            <p> Password </p>
            <input type="password" placeholder='Password' />
          </div>
          <div className="fogot-password">
            <div >
              
              <input type="radio" value="Fogot password" name ="forgot_pass" />
              <p>Fogot password</p>
            </div>
            
          <Link to = '/admin'>
            <button onClick={props.setIsAuticated} className='btn-login'> Login </button>
          </Link>
            
            <button className='btn-close-login' > Close </button>
          </div>
          </div>  
        
      </div>
    
  );
}

export default Login;
