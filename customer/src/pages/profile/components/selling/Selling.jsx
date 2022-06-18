import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TableComponent from "../Table/Table";
import HisToryList from "../../../../assets/json/profileHistory.json";
import PenddingList from "../../../../assets/json/profilePendding.json";
import CurrentList from "../../../../assets/json/profileCurent.json";
import "./sellingProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../../../slices/orderSlice";
const sellingTableHead = ["Item", "Style", "PurchaseDate", "Price", "Status"];
const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr>
    <td>
      <div className="description">{item.brand}</div>
      <div className="titlePro">{item.name}</div>
      <div className="size">Size: {item.size}</div>
    </td>
    <td>{item.description}</td>
    <td>{new Date(item.date).toLocaleDateString("vi-VN")}</td>
    <td>{item.price}</td>
    <td>Item Was Delivery</td>
  </tr>
);
const Selling = () => {
  const { order, sale } = useSelector((state) => state.profile);
  const [dataOrder, setDataOrder] = useState(order);
  const [dataSale, setDataSale] = useState(sale);
  const [successSale, setSuccessSale] = useState(sale);
  const [cancleSale, setCancleSale] = useState(sale);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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
  const [key, setKey] = React.useState("pending");
  return (
    <div>
      <div className="header">
        <h3>Selling</h3>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="pending" title="Pending">
          <TableComponent
            limit="3"
            headData={sellingTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={dataOrder}
            renderBody={(item, index) => renderBody(item, index)}
          />
        </Tab>
        <Tab eventKey="delivery" title="Delivery">
          <TableComponent
            limit="3"
            headData={sellingTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={dataSale}
            renderBody={(item, index) => renderBody(item, index)}
          />
        </Tab>
        <Tab eventKey="successfully" title="Successfully">
          <TableComponent
            limit="3"
            headData={sellingTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={successSale}
            renderBody={(item, index) => renderBody(item, index)}
          />
        </Tab>
        <Tab eventKey="cancel" title="Cancel">
          <TableComponent
            limit="3"
            headData={sellingTableHead}
            renderHead={(item, index) => renderHead(item, index)}
            bodyData={cancleSale}
            renderBody={(item, index) => renderBody(item, index)}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Selling;
