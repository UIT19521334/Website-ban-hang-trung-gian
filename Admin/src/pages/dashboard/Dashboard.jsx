import React, { useEffect } from "react";

import Statuscard from "./statuscard/Statuscard";
// import statusCards from "../../assets/jsonData/status-card-data.json";
import "./dashboard.css";
import ChartsPage from "./chart/Chart";
import ChartsCicle from "./chart/ChartCircle";
import Topcustomers from "./table/Topcustomers";
import Topproducts from "./table/Topproducts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductActions from "../../actions/product.actions";
import AnalyticActions from "../../actions/analytic.action";
import UserAction from "../../actions/user.actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AnalyticActions.getAll());
    dispatch(UserAction.getAllUser());
  }, []);

  const state_user = useSelector((state) => state.user.users);
  const state_analytic = useSelector((state) => state.analytic);

  const analyticList = state_analytic.analyticList;

  const statusCards = [
    {
      icon: "bx bx-dollar-circle",
      count: analyticList.revenue,
      title: "Revenue",
    },
    {
      icon: "bx bx-shopping-bag",
      count: analyticList.totalSales,
      title: "Sale",
    },
    {
      icon: "bx bx-shopping-bag",
      count: analyticList.totalSells,
      title: "Ask",
    },
    {
      icon: "bx bx-shopping-bag",
      count: analyticList.totalBuys,
      title: "Bid",
    },
    {
      icon: "bx bx-shopping-bag",
      count: analyticList.totalCancel,
      title: "Cancel",
    },
    {
      icon: "bx bx-shopping-bag",
      count: analyticList.totalPending,
      title: "Pending",
    },
    {
      icon: "bx bx-package",
      count: analyticList.totalProducts,
      title: "Products",
    },
    {
      icon: "bx bx-group",
      count: analyticList.totalUsers,
      title: "Users",
    },
    {
      icon: "bx bx-user-plus",
      count: analyticList.totalNewUsers,
      title: "New Users",
    },
  ];

  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-3">
                {/* Đây là chỗ để mấy cái card */}
                <Statuscard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-8">
          <div className="card full-height">
            {/* Phần biểu đồ */}
            <ChartsPage />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card__header">
              <h6>Top customers</h6>
              <div className="card__header__right">
                <Link to="/customer"> view all </Link>
              </div>
            </div>
            <div className="card__body">
              {/*Bảng*/}
              <Topcustomers listUser={state_user} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card__header">
              <h6>TOP PRODUCTS</h6>
              <div className="card__header__right">
                <Link to="/products"> view all </Link>
              </div>
            </div>
            <div className="card__body">
              {/*Bảng*/}
              <Topproducts />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card__header">
              <h6>RECENT TRANSCATION</h6>
              <div className="card__header__right">
                <Link to="/chart"> view all </Link>
              </div>
            </div>
            <div className="card__body">
              {/*Biểu đồ hình tròn*/}
              <ChartsCicle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
