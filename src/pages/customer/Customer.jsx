import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import customerList from '../../assets/jsonData/customer-list.json';


export default function Customer() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'ID',
        field: 'id',
        width: 150,
        
      },
      {
        label: 'Name',
        field: 'name',
        width: 270,
        attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'disabled',
        width: 200,
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Total Orders',
        field: 'total_orders',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Total Spend',
        field: 'total_spend',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Location',
        field: 'location',
        sort: 'disabled',
        width: 200,
      },
    ],
    rows:customerList
  });

  return  (
    <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card__body">
                  <h2>Customer</h2>
                  <MDBDataTableV5 
                    className='tableProducts'

                    hover
                    responsive

                    entriesOptions={[5, 10,20, 25]}  
                    entries={5} 
                    pagesAmount={4} 
                    data={datatable}                        
                    
                    //Cho thanh header có text màu trắng
                    theadTextWhite
                    //Cho thanh search lên top
                    searchTop
                    searchBottom={false}
                  />
                </div>
            </div>
        </div>
    </div> 
  )
}