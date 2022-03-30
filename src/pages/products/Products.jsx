import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import productsList from '../../assets/jsonData/products-list.json';
import './products.css';

export default function Products() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Position',
        field: 'position',
        width: 270,
      },
      {
        label: 'Office',
        field: 'office',
        width: 200,
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows:productsList
  });

  return  (
    <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card__body">
                  <h2>Products</h2>
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