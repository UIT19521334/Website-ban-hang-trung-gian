import React, { useEffect, useState } from "react";
import "./rule.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
export default function Settings() {
  const dispatch = useDispatch();

  const [rules, setRules] = useState({
    fee: 0,
  });

  const [changeState, setChangeState] = useState(false);

  const handleSubmitChangeRegulation = () => {
    axios.put(`http://localhost:2000/api/rule/62ab3030ffc2e786d211c386`, rules);
    alert("Lưu thành công");
    window.location.reload(false);
    setChangeState(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRules({
      ...rules,
      [name]: value,
    });
    setChangeState(true);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/rule/getAll`)
      .then(function (response) {
        return response.data;
      })
      .then(function (data) {
        const items = data;
        setRules({
          fee: items[0].fee,
        });
      });
  }, []);

  return (
    <div sidebar>
      <div className="container rulepage">
        <h1 className="head-title">Settings</h1>
        <div className="account">
          <h2 className="session-title">Account </h2>
          <div className="account___wrapper">
            <div className="account__option">
              <div className="account-name">
                {JSON.parse(localStorage.getItem("user")).name}
              </div>
            </div>
          </div>
        </div>
        <div className="regulation">
          <h2 className="session-title">Rules</h2>
          <div className="session-row">
            <span className="title">Transaction Fee</span>
            <input
              type="number"
              name="fee"
              value={rules.fee}
              onChange={handleChange}
              min="1"
            />
          </div>
          <button
            type="submit"
            className={changeState === true ? "button active" : "button"}
            name="button"
            onClick={changeState === true ? handleSubmitChangeRegulation : null}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
