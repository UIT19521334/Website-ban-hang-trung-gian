import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../../pages/home/Home';
import Products from '../../pages/products/Products';
import ProductDetail from '../../pages/productdetail/ProductDetail';
const CustomerRouter = () => {
  return (
      <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route path="/product" element={ <Products/> }/>
          <Route path="/productdetail" element={ <ProductDetail/> }/>
      </Routes>
    );
}
export default CustomerRouter;