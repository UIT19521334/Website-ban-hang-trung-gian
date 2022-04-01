import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './add_popup.css';
const Add_products = props => {
    const category_data = ['Chuck Taylor', 'Golf Shoes', 'Hiking Boots', 'High-Tops', 'Running Shoes', 'Soccer Shoes','Sneakers','Soccer Shoes']
    const status_data = ['Hot', 'Regular', 'TopSeller', 'Irregular', 'TopPick']
  return (
    <div className="popup-box">
      <div className="box_Add_popup_admin">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <div className="row">
            <div className="col-4">
                
                <input className='add_popup_input' placeholder='Product ID'/>
            </div>
            <div className="col-4">
                
                <input className='add_popup_input' placeholder='Name of product'/>
            </div>
            <div className="col-4">
                <Autocomplete
                  options={category_data}
                  style={{ margin: 10}}
                  renderInput={(params) =>
                    <TextField {...params} label="Category" variant="standard"  />}
                />
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                
                <input className='add_popup_input' placeholder='Price of product'/>
            </div>            
            <div className="col-4">
                
                <input className='add_popup_input' placeholder='Number of product'/>
            </div>
            <div className="col-4">
                
                <Autocomplete
                  options={status_data}
                  style={{ margin: 10}}
                  renderInput={(params) =>
                    <TextField {...params} label="Status" variant="standard"  />}
                />
            </div>
        </div>
        <div className="add_popup_footer">
            <button  className='btn__add' onClick={props.handleClose} > Add </button>
            <button className='btn__del' onClick={props.handleClose} > Close </button>
        </div>
      </div>
    </div>
  );
}

export default Add_products;
