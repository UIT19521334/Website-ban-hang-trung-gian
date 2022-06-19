import React, { useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import ordersList from "../../assets/jsonData/orders-list.json";
import Badge from "../../components/badge/Badge";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AuthenticateActions from "../../actions/authenticate.actions";
import { useRef } from "react";
import axiosIntance from "../../helpers/axios";

export default function Authenticates() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthenticateActions.getAllAuthenticate());
  }, []);

  const state_authenticate = useSelector((state) => state.authenticate);
  const fixData = useRef({
    columns: [
      {
        label: "STT",
        field: "stt",
        width: 150,
      },
      {
        label: "Seller",
        field: "asker",
        width: 150,
      },
      {
        label: "Buyer",
        field: "taker",
        width: 200,
      },
      {
        label: "Product",
        field: "product",
        width: 200,
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 100,
      },
      {
        label: "Size",
        field: "size",
        sort: "asc",
        width: 100,
      },
      {
        label: "Fee",
        field: "fee",
        width: 150,
      },
      {
        label: "Date",
        field: "date_sale",
        width: 150,
      },
      {
        label: "Time",
        field: "time_sale",
        width: 150,
      },
      {
        label: "Status",
        field: "status",
        width: 150,
      },
    ],
    rows: state_authenticate.authenticateList,
  });

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "STT",
        field: "stt",
        width: 150,
      },
      {
        label: "Seller",
        field: "asker",
        width: 150,
      },
      {
        label: "Buyer",
        field: "taker",
        width: 200,
      },
      {
        label: "Product",
        field: "product",
        width: 200,
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 100,
      },
      {
        label: "Size",
        field: "size",
        sort: "asc",
        width: 100,
      },
      {
        label: "Fee",
        field: "fee",
        width: 150,
      },
      {
        label: "Date",
        field: "date_sale",
        width: 150,
      },
      {
        label: "Time",
        field: "time_sale",
        width: 150,
      },
      {
        label: "Status",
        field: "status",
        width: 150,
      },
    ],
    rows: state_authenticate.authenticateList,
  });

  useEffect(() => {
    if (
      fixData.current.rows.length === 0 &&
      state_authenticate.authenticateList.length > 0
    )
      fixData.current = {
        columns: [
          {
            label: "STT",
            field: "stt",
            width: 150,
          },
          {
            label: "Seller",
            field: "asker",
            width: 150,
          },
          {
            label: "Buyer",
            field: "taker",
            width: 200,
          },
          {
            label: "Product",
            field: "product",
            width: 200,
          },
          {
            label: "Price",
            field: "price",
            sort: "asc",
            width: 100,
          },
          {
            label: "Size",
            field: "size",
            sort: "asc",
            width: 100,
          },
          {
            label: "Fee",
            field: "fee",
            width: 150,
          },
          {
            label: "Date",
            field: "date_sale",
            width: 150,
          },
          {
            label: "Time",
            field: "time_sale",
            width: 150,
          },
          {
            label: "Status",
            field: "status",
            width: 150,
          },
        ],
        rows: state_authenticate.authenticateList,
      };
    setDatatable({
      columns: [
        {
          label: "STT",
          field: "stt",
          width: 150,
        },
        {
          label: "Seller",
          field: "asker",
          width: 150,
        },
        {
          label: "Buyer",
          field: "taker",
          width: 200,
        },
        {
          label: "Product",
          field: "product",
          width: 200,
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
          width: 100,
        },
        {
          label: "Size",
          field: "size",
          sort: "asc",
          width: 100,
        },
        {
          label: "Fee",
          field: "fee",
          width: 150,
        },
        {
          label: "Date",
          field: "date_sale",
          width: 150,
        },
        {
          label: "Time",
          field: "time_sale",
          width: 150,
        },
        {
          label: "Status",
          field: "status",
          width: 150,
        },
      ],
      rows: state_authenticate.authenticateList,
    });
  }, [state_authenticate]);
  //   <Badge type = {[val.status]} content={val.status}/> Dòng này để thêm màu cho status mà chưa được
  const [checkbox1, setCheckbox1] = React.useState("");

  const showLogs2 = (e) => {
    setCheckbox1(e);
  };

  const updateStatus = (iFlag) => {
    if (iFlag === "Confirm") {
      axiosIntance.put(`/sale/${checkbox1._id}`, { status: "Đã xác nhận" });
      alert("Xác nhận thành công!!!");
      window.location.reload(false);
    } else {
      axiosIntance.put(`/sale/${checkbox1._id}`, { status: "Hủy" });
      alert("Hủy thành công!!!");
      window.location.reload(false);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card__body">
            <div className="card__body-header-cus">
              <h2>Sales page</h2>
              <div className="card__body-header-right">
                <button
                  className="btn__add"
                  onClick={() => updateStatus("Confirm")}
                >
                  {" "}
                  Confirm{" "}
                </button>
                <button
                  className="btn__del"
                  onClick={() => updateStatus("Cancel")}
                >
                  {" "}
                  Cancel{" "}
                </button>
              </div>
            </div>
            {datatable.rows?.length > 0 && (
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
    </div>
  );
}
