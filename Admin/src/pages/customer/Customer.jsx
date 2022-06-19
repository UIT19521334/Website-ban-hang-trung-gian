import React, { useEffect, useRef, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import customerList from "../../assets/jsonData/customer-list.json";
import Add_customer from "./Add_customers";
import "./customer.css";
import { useDispatch, useSelector } from "react-redux";
import UserAction from "../../actions/user.actions";

export default function Customer() {
  const dispatch = useDispatch();

  const [Add_customer_page, setAddProducts_page] = useState(false);

  const showAddPage = () => {
    console.log("click");
    setAddProducts_page(!Add_customer_page);
  };

  useEffect(() => {
    dispatch(UserAction.getAllUser());
  }, []);

  const state_user = useSelector((state) => state.user.users);

  const fixData = useRef({
    columns: [
      {
        label: "STT",
        field: "id",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        width: 270,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Email",
        field: "email",
        sort: "disabled",
        width: 200,
      },
      {
        label: "Phone",
        field: "phoneNumber",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Total Sell",
        field: "totalSell",
        sort: "asc",
        width: 100,
      },
      {
        label: "Total Buy",
        field: "totalBuy",
        sort: "asc",
        width: 100,
      },
    ],
    rows: state_user,
  });

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "STT",
        field: "id",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        width: 270,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Email",
        field: "email",
        sort: "disabled",
        width: 200,
      },
      {
        label: "Phone",
        field: "phoneNumber",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Total Sell",
        field: "totalSell",
        sort: "asc",
        width: 100,
      },
      {
        label: "Total Buy",
        field: "totalBuy",
        sort: "asc",
        width: 100,
      },
    ],
    rows: state_user,
  });
  const [fixState, setFixState] = useState(false);

  useEffect(() => {
    if (fixData.current.rows.length > 0) {
      setFixState(true);
    }
  }, [fixData.current]);
  useEffect(() => {
    if (fixData.current.rows.length === 0 && state_user.length > 0) {
      fixData.current = {
        columns: [
          {
            label: "STT",
            field: "id",
            width: 150,
          },
          {
            label: "Name",
            field: "name",
            width: 270,
            attributes: {
              "aria-controls": "DataTable",
              "aria-label": "Name",
            },
          },
          {
            label: "Email",
            field: "email",
            sort: "disabled",
            width: 200,
          },
          {
            label: "Phone",
            field: "phoneNumber",
            sort: "disabled",
            width: 100,
          },
          {
            label: "Total Sell",
            field: "totalSell",
            sort: "asc",
            width: 100,
          },
          {
            label: "Total Buy",
            field: "totalBuy",
            sort: "asc",
            width: 100,
          },
        ],
        rows: state_user,
      };
    }
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
      rows: state_user,
    });
  }, [state_user]);

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
              <h2>Customers</h2>
              <div className="card__body-header-right">
                {/* <button className="btn__add" onClick={showAddPage}>
                  {" "}
                  Add{" "}
                </button>
                <button className="btn__del"> Delete </button>
                <button className="btn__fix" onClick={showAddPage}>
                  {" "}
                  Fix
                </button> */}
              </div>
            </div>

            {/* <WithCheckBoxes data={datatable}></WithCheckBoxes> */}
            {fixData.current.rows.length > 0 && fixState && (
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
      {Add_customer_page && <Add_customer handleClose={showAddPage} />}
    </div>
  );
}
