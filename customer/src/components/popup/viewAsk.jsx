import React from "react";
import data from "../../assets/json/allBids.json";
import "./popup.css";

function ViewAsk(props) {
  const handleProductOrder = () => {
    const productOrder = props.productOrder.reduce((prev, curItem) => {
      if (curItem.order_type === "sell" && curItem.active)
        return [...prev, curItem];
      else return prev;
    }, []);
    const fixedOrder = productOrder.reduce((prev, curItem) => {
      let check = false;
      for (let order of prev) {
        if (order.price === curItem.price && order.size === curItem.size) {
          order.count += 1;
          check = true;
        }
      }
      if (!check) {
        return [
          ...prev,
          {
            quantity: 1,
            price: curItem.price,
            size: curItem.size,
          },
        ];
      } else {
        return prev;
      }
    }, []);

    return fixedOrder.sort((a, b) => a.price - b.price);
  };
  return (
    <div className="viewBox">
      {}
      <div className="viewBox_header">
        <div className="header__content">
          <h4>All Asks</h4>
          <p>
            The data below is global and does not include applicable fees
            calculated at checkout.
          </p>
        </div>
        <button className="btn__del" onClick={props.handleClose}>
          {" "}
          X{" "}
        </button>
      </div>
      <hr />
      <div className="table-wrapper">
        <table className="table-basic">
          <thead className="table-basic-thead">
            <tr>
              <th>Quantity</th>
              <th>Size</th>
              <th>Ask Price</th>
            </tr>
          </thead>
          <tbody className="table-basic-tbody">
            {handleProductOrder().map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.quantity}</td>
                  <td>{val.size}</td>
                  <td>{val.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ViewAsk;
