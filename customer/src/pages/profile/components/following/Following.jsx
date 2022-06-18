import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TableComponent from "../Table/Table";
import FlowingList from "../../../../assets/json/profileFollowing.json";
import "./following.css";
import { useDispatch, useSelector } from "react-redux";

import { addFollow } from "../../../../slices/productSlice";
import { fetchOrder } from "../../../../slices/profileDataSlice";
const buyingTableHead = ["Name", "Market Value", "Lowest Ask", "Last Sale", ""];
const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index, handleRemove) => {
  return (
    <tr>
      <td>
        <div className="item__">
          <img src={item.product_id?.img_path} style={{ width: 100 }} />
          <div>
            <div className="Item_title">{item.product_id?.name}</div>
            <div className="Item_size">Size 10</div>
          </div>
        </div>
      </td>
      <td>{item.product_id?.retail_price}</td>
      <td>{item.product_id?.retail_price - 5}</td>
      <td>{item.product_id?.retail_price + 12}</td>
      <td>
        <i
          class="bx bxs-trash delete_item"
          onClick={() => handleRemove(item.product_id._id)}
          style={{ fontSize: 24 }}
        ></i>
      </td>
    </tr>
  );
};

const Following = () => {
  const { order, sale, following, isLoading } = useSelector(
    (state) => state.profile
  );
  const [dataOrder, setDataOrder] = useState(order);
  const [dataSale, setDataSale] = useState(sale);
  const [successSale, setSuccessSale] = useState(sale);
  const [cancleSale, setCancleSale] = useState(sale);
  const [follow, setFollow] = useState(sale);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchOrder(JSON.parse(localStorage.getItem("user")).user._id));
  // }, [isLoading, dispatch]);
  useEffect(() => {
    dispatch(fetchOrder(user._id));
  }, []);
  useEffect(() => {
    setDataOrder(
      order.reduce((prev, curItem) => {
        if (curItem.type === "sell") {
          return [...prev, curItem];
        } else return prev;
      }, [])
    );
  }, [order]);
  useEffect(() => {
    setFollow(following);
  }, [following]);
  useEffect(() => {
    setDataSale(
      sale.reduce((prev, curItem) => {
        if (curItem.type === "sell" && curItem.status === "Chờ xác nhận") {
          return [...prev, curItem];
        } else return prev;
      }, [])
    );
    setSuccessSale(
      sale.reduce((prev, curItem) => {
        if (curItem.type === "sell" && curItem.status === "Đã xác nhận") {
          return [...prev, curItem];
        } else return prev;
      }, [])
    );
    setCancleSale(
      sale.reduce((prev, curItem) => {
        if (curItem.type === "sell" && curItem.status === "Huỷ") {
          return [...prev, curItem];
        } else return prev;
      }, [])
    );
  }, [sale]);
  const [key, setKey] = React.useState("current");
  const handleRemove = (id) => {
    dispatch(addFollow({ user_id: user._id, product_id: id }));
    dispatch(fetchOrder(JSON.parse(localStorage.getItem("user")).user._id));

    setFollow(following);
  };
  return (
    <div>
      <h3>Following</h3>
      <TableComponent
        limit="5"
        headData={buyingTableHead}
        renderHead={(item, index) => renderHead(item, index)}
        bodyData={follow}
        handleRemove={handleRemove}
        renderBody={(item, index, handleRemove) =>
          renderBody(item, index, handleRemove)
        }
      />
    </div>
  );
};

export default Following;
