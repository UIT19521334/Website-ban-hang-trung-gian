import "./App.css";
import "boxicons/css/boxicons.min.css";
import React, { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import Layout from "./components/layout/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  // const [user, setUser] = useState(null);
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
