import React from 'react';

const SideBar = () => {
  return (
    <div className='account__sidebar'>
      <h4>Nguyễn Đức Chí Đạt</h4>
          <div className="component">
                <div className="component_left">
                    <i class='bx bxs-user-pin' ></i>
                </div>
                <div className="compoent_right">
                    <h6>Profile</h6>
                    <p>Learn what's unique to you</p> 
                </div>
          </div>
    </div>
  );
}

export default SideBar;
