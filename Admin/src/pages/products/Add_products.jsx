import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DatePicker from "react-datepicker";
import "./add_popup.css";
import "react-datepicker/dist/react-datepicker.css";

const Add_products = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const [editData, setEditData] = useState(false);
  const checkEditData = () => {
    if (
      product.name &&
      product.retail_price &&
      product.release_date &&
      product.description &&
      product.category
    ) {
      setEditData(true);
    } else {
      setEditData(false);
    }
  };

  const [product, setProduct] = useState(props.product);

  const findIdOfCategory = (name_category) => {
    for (let c of props.categoryList) {
      if (name_category === c.name_category) return c._id;
    }
  };

  return (
    <div className="popup-box">
      <div className="box_Add_popup_admin">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
        <div className="row">
          {/* <div className="col-4">
            <input className="add_popup_input" placeholder="Product ID" />
          </div> */}
          <div className="col-4">
            <input
              className="add_popup_input"
              placeholder="Name of product"
              value={product.name}
              onChange={(e) => {
                setProduct({ ...product, name: e.target.value });
                checkEditData();
              }}
            />
          </div>
          <div className="col-4">
            <Autocomplete
              options={props.productList.map((item) => item.name_category)}
              style={{ margin: 10 }}
              renderInput={(params) => (
                <TextField {...params} label="Category" variant="standard" />
              )}
              value={product.name_category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  brand: e.target.value,
                  category: findIdOfCategory(e.target.value),
                });
                checkEditData();
              }}
            />
          </div>
          <div className="col-4">
            <input
              className="add_popup_input"
              placeholder="Description"
              value={product.description}
              onChange={(e) => {
                setProduct({ ...product, description: e.target.value });
                checkEditData();
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <input
              type="number"
              className="add_popup_input"
              placeholder="Retail price of product"
              value={product.retail_price}
              onChange={(e) => {
                setProduct({ ...product, retail_price: e.target.value });
                checkEditData();
              }}
            />
          </div>
          <div className="col-4">
            <DatePicker
              className="add_popup_input"
              selected={startDate}
              value={product.release_date}
              onChange={(date) => {
                setStartDate(date);
                setProduct({ ...product, release_date: date.target.value });
                checkEditData();
              }}
            />
          </div>

          {/* <div className="col-4">
            <Autocomplete
              options={status_data}
              style={{ margin: 10 }}
              renderInput={(params) => (
                <TextField {...params} label="Status" variant="standard" />
              )}
            />
          </div> */}
        </div>
        <div className="add_popup_footer">
          <button
            className="btn__add"
            onClick={props.handleClose}
            disabled={!editData}
          >
            {" "}
            Add{" "}
          </button>
          <button className="btn__del" onClick={props.handleClose}>
            {" "}
            Close{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add_products;
