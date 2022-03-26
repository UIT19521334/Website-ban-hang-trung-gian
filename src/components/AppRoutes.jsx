import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Switch>
        <Route path='/' render={props => <Home {...props} />} />
        <Route path='/Dashboard' render={props => <Dashboard {...props} />} />
    </Switch>
  );
}
export default AppRoutes;
