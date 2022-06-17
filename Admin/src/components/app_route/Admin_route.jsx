import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../../pages/home";
import Dashboard from "../../pages/dashboard/Dashboard";
import ChartsPage from "../../pages/dashboard/chart/Chart";
import Customer from "../../pages/customer/Customer";
import Products from "../../pages/products/Products";
import Orders from "../../pages/orders/Orders";
const Admin_route = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chart" element={<ChartsPage />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};
export default Admin_route;
