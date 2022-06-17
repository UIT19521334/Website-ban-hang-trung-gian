import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DatePicker from "react-datepicker";
import "./add_popup.css";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import ProductActions from "../../actions/product.actions";
import { useDispatch } from "react-redux";

const Add_products = (props) => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());

  const initProduct = () => {
    return {
      _id: "",
      name: "",
      brand: "",
      retail_price: "",
      release_date: "",
      description: "",
      img_path: "",
      category: "",
    };
  };

  const [product, setProduct] = useState(props.product);

  const [editData, setEditData] = useState(false);

  const checkEditData = (targetValue, object) => {
    if (
      product.name &&
      product.brand &&
      product.retail_price &&
      product.release_date &&
      product.description &&
      product.category &&
      product.img_path
    ) {
      setEditData(true);
    } else {
      setEditData(false);
    }
    console.log(editData);
  };

  const handleModalSave = () => {
    const form = product;
    if (props.modalFlag === "Add") {
      delete form._id;

      console.log(form);

      dispatch(ProductActions.addProduct(form));

      swal({
        title: "Thêm thành công",
        text: "Bạn đã thêm sản phẩm thành công",
        icon: "success",
        button: "OK",
      });
    } else {
      dispatch(ProductActions.editProduct(form));

      swal({
        title: "Sửa thành công",
        text: "Bạn đã sửa sản phẩm thành công",
        icon: "success",
        button: "OK",
      });
    }
    setProduct(initProduct);
    resetCss();
  };

  const handleModalClose = () => {
    setProduct(initProduct);
    resetCss();
  };

  const resetCss = () => {
    setEditData(false);
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
              options={props.categoryList}
              getOptionLabel={(item) => item.name_category}
              style={{ margin: 10 }}
              value={product.name_category}
              onChange={(e, v) => {
                setProduct({
                  ...product,
                  brand: v.name_category,
                  category: v._id,
                });
                checkEditData();
              }}
              renderInput={(params) => (
                <TextField {...params} label="Category" variant="standard" />
              )}
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
                setProduct({
                  ...product,
                  retail_price: parseInt(e.target.value),
                });
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
                setProduct({
                  ...product,
                  release_date: date.toISOString().split("T")[0],
                });
                checkEditData();
              }}
            />
          </div>
          <div className="col-4">
            <input
              className="add_popup_input"
              placeholder="Image of Product"
              value={product.img_path}
              onChange={(e) => {
                setProduct({ ...product, img_path: e.target.value });
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
            onClick={handleModalSave}
            disabled={!editData}
          >
            {" "}
            {props.modalFlag}{" "}
          </button>
          <button className="btn__del" onClick={props.handleClose}>
            {" "}
            Close{" "}
          </button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ color: "red" }} id="alert-dialog-title">
          {"Notification"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are missing some fields
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openAddOK}
        onClose={handleCloseAddOK}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ color: "green" }} id="alert-dialog-title">
          {"Congratulation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your adding successfully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddOK} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Add_products;
