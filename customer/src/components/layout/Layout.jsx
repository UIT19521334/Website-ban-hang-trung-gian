import React, { useLocation, useLayoutEffect, useEffect } from "react";
import Appbar from "../header/Appbar";
import Footer from "../footer/Footer";

import CustomerRouter from "../router/CustomerRouter";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import "./layout.css";

const Layout = () => {
  return (
    <BrowserRouter forceRefresh={true}>
      <ScrollToTop />
      <div className="layout">
        <Appbar />
        <div className="layout__content-main">
          <CustomerRouter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
