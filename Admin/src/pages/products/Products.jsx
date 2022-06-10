import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTableV5 } from "mdbreact";
// import productsList from "../../assets/jsonData/products-list.json";
import Add_products from "./Add_products";
import "./products.css";
import ProductActions from "../../actions/product.actions";
// import Badge from '../../components/badge/Badge';
export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductActions.getAllProduct());
  }, []);

  // useEffect(()=>{
  //   let productData =[];
  //   productsList.map((item,index)=>{
  //     item.status = (
  //       <Badge content={item.status} />
  //     )
  //     productData.push(item);
  //   });
  //   setproDuctData(productData);
  //   console.log('product data:', productData)
  // }, [proDuctData])

  //const [proDuctData,setproDuctData]= useState([]);

  const state_product = useSelector((state) => state.products);

  const [AddProducts_page, setAddProducts_page] = useState(false);

  const showAddPage = () => {
    setAddProducts_page(!AddProducts_page);
  };

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "ID",
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

  useEffect(() => {
    if (state_product.productList.length > 0) {
      setDatatable({
        columns: [
          {
            label: "ID",
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
        rows: state_product.productList || [],
      });
    }
  }, [state_product.productList]);
  const [checkbox1, setCheckbox1] = React.useState("");

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card__body">
            <div className="card__body-header-cus">
              <h2>Products</h2>
              <div className="card__body-header-right">
                <button className="btn__add" onClick={showAddPage}>
                  {" "}
                  Add{" "}
                </button>
                <button className="btn__del"> Delete </button>
                <button className="btn__fix" onClick={showAddPage}>
                  {" "}
                  Fix
                </button>
              </div>
            </div>
            <MDBDataTableV5
              className="tableProducts"
              hover
              responsive
              entriesOptions={[5, 10, 20, 25]}
              entries={5}
              pagesAmount={4}
              data={datatable}
              //Cho thanh header có text màu trắng
              theadTextWhite
              //Cho thanh search lên top
              searchTop
              searchBottom={false}
              //Tạo checkbox
              // Tìm hiểu thêm tại trang https://mdbootstrap.com/docs/react/tables/datatables/#top-select-serach
              checkbox={checkbox1}
              headCheckboxID="id2"
              bodyCheckboxID="checkboxes2"
              getValueCheckBox={(e) => {
                showLogs2(e);
              }}
            />
          </div>
        </div>
      </div>
      {AddProducts_page && <Add_products handleClose={showAddPage} />}
    </div>
  );
}
