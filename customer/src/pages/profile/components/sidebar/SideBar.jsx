import React from 'react';
import "./sidebar.css";
const SideBar = () => {
  return (
    <div className='account__sidebar'>
      <h3>My account</h3>
          <div className="component">
                <div className="component_left">
                  <i class='bx bx-user-pin bx-flip-horizontal' ></i>
                </div>
                <div className="component_right">
                    <strong>Profile</strong>
                    <p>Learn what's unique to you</p> 
                </div>
          </div>
          <div className="component">
                <div className="component_left">
                  <i class='bx bx-package'></i>
                </div>
                <div className="component_right">
                    <strong>Buying</strong>
                    <p>Active bids, In progress, Complete order</p> 
                </div>
          </div>
          <div className="component">
                <div className="component_left">
                  <i class='bx bx-money-withdraw' ></i>
                </div>
                <div className="component_right">
                    <strong>Selling</strong>
                    <p>Learn what's unique to you</p> 
                </div>
          </div>
          <div className="component">
                <div className="component_left">
                  <i class='bx bx-log-out bx-flip-horizontal' ></i>
                </div>
                <div className="component_logout">
                    <strong>Log out</strong> 
                </div>
          </div>
    </div>
  );
}

export default SideBar;
