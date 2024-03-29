import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTableV5 } from "mdbreact";
// import productsList from "../../assets/jsonData/products-list.json";
import Add_products from "./Add_products";
import "./products.css";
import ProductActions from "../../actions/product.actions";
import CategoryActions from "../../actions/category.actions";
import axiosIntance from "../../helpers/axios";
// import Badge from '../../components/badge/Badge';
export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductActions.getAllProduct());
    dispatch(CategoryActions.getAllCategory());
  }, []);

  const state_product = useSelector((state) => state.products);
  const state_category = useSelector((state) => state.categories);

  const [AddProducts_page, setAddProducts_page] = useState(false);
  const [EditProducts_page, setEditProducts_page] = useState(false);

  const showAddPage = (iFlag) => {
    if (iFlag === "Add") {
      setAddProducts_page(!AddProducts_page);
    } else if (iFlag === "Edit") {
      setEditProducts_page(!EditProducts_page);
    }
  };

  const [datatable, setDatatable] = React.useState();

  const fixData = useRef({
    columns: [
      {
        label: "STT",
        field: "products_id",
        width: 150,
      },
      {
        label: "Category",
        field: "name_category",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Description",
        field: "description",
        width: 200,
      },
      {
        label: "Retail Price",
        field: "retail_price",
        sort: "asc",
        width: 200,
      },
      {
        label: "Release Date",
        field: "release_date",
        sort: "asc",
        width: 200,
      },
    ],
    rows: state_product.productList,
  });

  const [checkbox1, setCheckbox1] = React.useState("");

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  const [fixState, setFixState] = useState(false);

  useEffect(() => {
    if (fixData.current.rows.length > 0) {
      setFixState(true);
    }
  }, [fixData.current]);

  useEffect(() => {
    if (
      state_product.productList?.length > 0 &&
      fixData.current.rows.length === 0
    ) {
      setFixState(true);
      fixData.current = {
        columns: [
          {
            label: "STT",
            field: "products_id",
            width: 150,
          },
          {
            label: "Category",
            field: "name_category",
            width: 150,
          },
          {
            label: "Name",
            field: "name",
            width: 150,
            attributes: {
              "aria-controls": "DataTable",
              "aria-label": "Name",
            },
          },
          {
            label: "Description",
            field: "description",
            width: 200,
          },
          {
            label: "Retail Price",
            field: "retail_price",
            sort: "asc",
            width: 200,
          },
          {
            label: "Release Date",
            field: "release_date",
            sort: "asc",
            width: 200,
          },
        ],
        rows: state_product.productList,
      };
      setFixState(true);
      setDatatable({
        columns: [
          {
            label: "STT",
            field: "products_id",
            width: 150,
          },
          {
            label: "Category",
            field: "name_category",
            width: 150,
          },
          {
            label: "Name",
            field: "name",
            width: 150,
            attributes: {
              "aria-controls": "DataTable",
              "aria-label": "Name",
            },
          },
          {
            label: "Description",
            field: "description",
            width: 200,
          },
          {
            label: "Retail Price",
            field: "retail_price",
            sort: "asc",
            width: 200,
          },
          {
            label: "Release Date",
            field: "release_date",
            sort: "asc",
            width: 200,
          },
        ],
        rows: state_product.productList,
      });
    }
  }, [state_product.productList]);

  const deletedelete = () => {
    axiosIntance.delete(`/product/${checkbox1._id}`);
    alert("Product has been deleted");
    window.location.reload(false);
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card__body">
            <div className="card__body-header-cus">
              <h2>Products</h2>
              <div className="card__body-header-right">
                <button className="btn__add" onClick={() => showAddPage("Add")}>
                  {" "}
                  Add{" "}
                </button>
                <button className="btn__del" onClick={() => deletedelete()}>
                  {" "}
                  Delete{" "}
                </button>
                <button
                  className="btn__fix"
                  onClick={() => showAddPage("Edit")}
                >
                  {" "}
                  Fix
                </button>
              </div>
            </div>
            {state_product.productList?.length > 0 && fixState && (
              <MDBDataTableV5
                className="tableProducts"
                hover
                responsive
                entriesOptions={[5, 10, 20, 25]}
                entries={10}
                pagesAmount={4}
                data={fixData.current}
                //Cho thanh header có text màu trắng
                theadTextWhite
                //Cho thanh search lên top
                searchTop
                searchBottom={false}
                //Tạo checkbox
                // Tìm hiểu thêm tại trang https://mdbootstrap.com/docs/react/tables/datatables/#top-select-serach
                checkbox={true}
                headCheckboxID="id2"
                bodyCheckboxID="checkboxes2"
                getValueCheckBox={(e) => {
                  showLogs2(e);
                }}
              />
            )}
          </div>
        </div>
      </div>
      {AddProducts_page && (
        <Add_products
          handleClose={() => {
            showAddPage("Add");
            setCheckbox1("");
          }}
          productList={state_product.productList}
          categoryList={state_category.categoryList}
          product=""
          modalFlag="Add"
        />
      )}
      {EditProducts_page && (
        <Add_products
          handleClose={() => {
            showAddPage("Edit");
            setCheckbox1("");
          }}
          productList={state_product.productList}
          categoryList={state_category.categoryList}
          product={checkbox1}
          modalFlag="Edit"
        />
      )}
    </div>
  );
}
