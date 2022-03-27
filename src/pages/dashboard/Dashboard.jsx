import React from 'react';

import Statuscard from '../../components/statuscard/Statuscard';
import statusCards from '../../assets/jsonData/status-card-data.json';
import './dashboard.css';
import ChartsPage from './Chart';

const Dashboard = () => {
  return (
    <div>
        <h2 className="page-header">Dashboard</h2>
        <div className="row">
          <div className="col-6">
            <div className="row">
              {
                statusCards.map((item,index)=>(
                 <div className='col-6'>
                    {/* Đây là chỗ để mấy cái card */}
                    <Statuscard
                      icon = {item.icon}
                      count = {item.count}
                      title = {item.title}
                    />
                 </div> 
                ))
              }
            </div>

          </div>
          <div className="col-6">
            <div className="card full-height">
              {/* Phần biểu đồ */}
              {/* <ChartsPage/> */}
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default Dashboard;
