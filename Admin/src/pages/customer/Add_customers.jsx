import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import '../products/add_popup.css';
const Add_customer = props => {
    const location_data = ['Quảng Trị', 'Quảng Nam', 'Tp HCM', 'Hà Nội', 'Đà Nẵng']
  return (
    <div className="popup-box">
      <div className="box_Add_popup_admin">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <div className="row">
            <div className="col-4">
                
                <input className='add_popup_input' placeholder='Name of customer'/>
            </div>
            <div className="col-4">
                
                <input type="email" className='add_popup_input' placeholder='Email of customer'/>
            </div>
            <div className="col-4">

                <input type="number" className='add_popup_input' placeholder='Customer phone number'/>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                
                <input type="number" className='add_popup_input' placeholder='Total orders'/>
            </div>            
            <div className="col-4">
                
                <input type="number" className='add_popup_input' placeholder='Total spend'/>
            </div>
            <div className="col-4">
                
                <Autocomplete
                  options={location_data}
                  style={{ margin: 10}}
                  renderInput={(params) =>
                    <TextField {...params} label="Location" variant="standard"  />}
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

export default Add_customer;
