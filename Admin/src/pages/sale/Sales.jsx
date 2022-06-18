import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import ordersList from "../../assets/jsonData/orders-list.json";
import Badge from "../../components/badge/Badge";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SaleActions from "../../actions/sale.actions";

export default function Sales() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SaleActions.getAllSale());
  }, []);

  const state_sale = useSelector((state) => state.sales);

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "STT",
        field: "stt",
        width: 150,
      },
      {
        label: "Product",
        field: "product",
        width: 200,
      },
      {
        label: "Size",
        field: "size",
        width: 200,
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 100,
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
    ],
    rows: state_sale.saleList,
  });

  useEffect(() => {
    setDatatable({
      columns: [
        {
          label: "STT",
          field: "stt",
          width: 150,
        },
        {
          label: "Product",
          field: "product",
          width: 200,
        },
        {
          label: "Size",
          field: "size",
          width: 200,
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
          width: 100,
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
      ],
      rows: state_sale.saleList,
    });
  }, [state_sale]);
  //   <Badge type = {[val.status]} content={val.status}/> Dòng này để thêm màu cho status mà chưa được
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
              <h2>Orders page</h2>
              <div className="card__body-header-right">
                <button className="btn__add"> Add </button>
                <button className="btn__del"> Delete </button>
                <button className="btn__fix"> Fix</button>
              </div>
            </div>
            {datatable.rows?.length > 0 && (
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
                checkbox
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
