import React, { useEffect } from "react";

import SideBar from "./components/sidebar/SideBar";
import MyProfile from "./components/myprofile/MyProfile";
import "./accountlayout.css";
import Component from "./components/router/profileRouter";
import { useDispatch } from "react-redux";
import { fetchOrder } from "../../slices/profileDataSlice";

const AccountLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrder(JSON.parse(localStorage.getItem("user")).user._id));
  }, []);
  return (
    <div className="account__layout">
      <SideBar />
      <div className="account__layout__content">
        <Component />
      </div>
    </div>
  );
};

export default AccountLayout;
