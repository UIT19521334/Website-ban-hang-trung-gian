import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Products from '../../pages/products/Products';
import ProductDetail from '../../pages/productdetail/ProductDetail';
const CustomerRouter = () => {
  return (
      <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/product" component={ Products }/>
          <Route path="/productdetail" component={ ProductDetail }/>
      </Switch>
    );
}
export default CustomerRouter;
