import React from "react";
import "./Sidebar.css";
import { Link, Redirect } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import sideBar__item from "../../assets/jsonData/sideBar_routes.json";
import axiosIntance from "../../helpers/axios.js";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};
const findActiveItem = (value) => {
  sideBar__item.map((item, ind) => {
    console.log(item.route.slice(1));
    if (item.route.slice(1).toString() === value) {
      return ind;
    }
  });
};

const Sidebar = (props) => {
  const logout = () => {
    axiosIntance.post(`/admin/signout`);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      {sideBar__item.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === findActiveItem("dashboard")}
          />
        </Link>
      ))}
      <div className="sidebar__footer">
        <button className="logout_btn" onClick={() => logout()}>
          <i class="bx bx-log-out"></i>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
