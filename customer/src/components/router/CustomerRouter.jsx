import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../../pages/home/Home';
import Products from '../../pages/products/Products';
import ProductDetail from '../../pages/productdetail/ProductDetail';
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';
import MyProfile from '../../pages/profile/MyProfile';
const CustomerRouter = () => {
  return (
      <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route path="/product" element={ <Products/> }/>
          <Route path="/productdetail" element={ <ProductDetail/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/signup" element={ <Signup/> }/>
          <Route path="/profile" element={ <MyProfile/> }/>
      </Routes>
    );
}
export default CustomerRouter;
