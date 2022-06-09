import React from 'react';
import './myprofile.css';
import { UserContext } from '../../../../UserContext';
const MyProfile = () => {
    const {user} = React.useContext(UserContext);
    return (
    <div className='profile'>
      <div className="profile_header">
          <div className="header_left">
              <h3>Profile</h3>
          </div>
          <div className="header_right">
              <button>Edit</button>
          </div>
         
      </div>
      <hr />
      <div className="profile_body">
          <div className="row">
              <div className="col-4">
                  <h5>Name</h5>
                  <p>{user.name}</p>
              </div>
              <div className="col-4">
                  <h5>Shoes size</h5>
                  <p>Not set</p>
              </div>
              <div className="col-4">
                  <h5>Email address</h5>
                  <p>{user.email}</p>
              </div>
          </div>
          <div className="row">
              <div className="col-4">
                  <h5>UserName</h5>
                  <p>{user.username}</p>
              </div>
              <div className="col-4">
                  <h5>Reset password</h5>
                  <button>Reset pass</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default MyProfile
