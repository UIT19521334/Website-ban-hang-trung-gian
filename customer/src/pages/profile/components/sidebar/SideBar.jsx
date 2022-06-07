import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";
const SideBar = () => {
  return (
    <div className='account__sidebar'>
      <h3>My account</h3>
          <Link to="./" className="component">
                <div className="component_left">
                  <i class='bx bx-user-pin bx-flip-horizontal' ></i>
                </div>
                <div className="component_right">
                    <strong>Profile</strong>
                    <p>Learn what's unique to you</p> 
                </div>
          </Link>
          <Link to="./buying" className="component">
                <div className="component_left">
                  <i class='bx bx-cart-alt'></i>
                </div>
                <div className="component_right">
                    <strong>Buying</strong>
                    <p>Active bids, In progress, Complete order</p> 
                </div>
          </Link>
          <Link to="./selling" className="component">
                <div className="component_left">
                  <i class='bx bx-money-withdraw' ></i>
                </div>
                <div className="component_right">
                    <strong>Selling</strong>
                    <p>Learn what's unique to you</p> 
                </div>
          </Link>
          <Link to="./following" className="component">
                <div className="component_left">
                  <i class='bx bxs-webcam'></i>
                </div>
                <div className="component_right">
                    <strong>Following</strong>
                    <p>Following something</p> 
                </div>
          </Link>
          <Link to="/" className="component">
                <div className="component_left">
                  <i class='bx bx-power-off' ></i>
                </div>
                <div className="component_logout">
                    <strong>Log out</strong> 
                </div>
          </Link>
    </div>
  );
}

export default SideBar;
