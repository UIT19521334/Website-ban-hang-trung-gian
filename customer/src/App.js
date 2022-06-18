import "./App.css";
import "boxicons/css/boxicons.min.css";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import Layout from "./components/layout/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer, toast } from "react-toastify";
function App() {
  // const [user, setUser] = useState(null);
  return (
    <Provider store={store}>
      <Layout />
      <ToastContainer />
    </Provider>
  );
}

export default App;
