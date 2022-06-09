import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Customer from "../../pages/customer/Customer";
import ChartsPage from "../../pages/dashboard/chart/Chart";
import Dashboard from "../../pages/dashboard/Dashboard";
import Login from "../../pages/login/Login";
import Orders from "../../pages/orders/Orders";
import Products from "../../pages/products/Products";
import Admin_layout from "../layout/Admin_layout";

const App_route = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />}></Route>
      <Route path={"/"} element={<Admin_layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chart" element={<ChartsPage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Route>
      {/* <Route path="/login">
        <Login />
      </Route>
      {<Route path="/admin" component={Admin_layout} />}

      {/* <Route path="/">
          <Redirect to="/login" />
        </Route> */}{" "}
    </Routes>
  );
};

export default App_route;
