import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Dashboard from '../pages/dashboard/Dashboard';
import ChartsPage from '../pages/dashboard/Chart';

const AppRoutes = () => {
  return (
    <Switch>
        <Route path='/' exact component={Home}  />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/actions' component={ChartsPage} />
        <Route path='/customer' component={Dashboard} />
    </Switch>
  );
}
export default AppRoutes;
