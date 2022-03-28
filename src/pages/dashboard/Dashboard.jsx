import React from 'react';

import Statuscard from '../../components/statuscard/Statuscard';
import statusCards from '../../assets/jsonData/status-card-data.json';
import './dashboard.css';
import ChartsPage from './Chart';
import Tables from '../../components/table/Table';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <h2 className="page-header">Dashboard</h2>
        <div className="row">
          <div className="col-12">
            <div className="row">
              {
                statusCards.map((item,index)=>(
                 <div className='col-3'>
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
          <div className="col-8">
            <div className="card full-height">
              {/* Phần biểu đồ */}
              <ChartsPage/> 
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card__header">
                <h3>Top customers</h3>
              </div>
              <div className="card__body">
                {/*Bảng*/}
                <Tables/>
              </div>
              <div className="card__footer">
                <Link to='/'> view all </Link>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default Dashboard;
