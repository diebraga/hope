import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search/index.js';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Notfound from '../components/Notfound';
import Home from '../pages/Home/index.js';
import InstitutionsDetail from '../pages/InstitutionDetails/index.js';
import PrivateRoute from '../components/PrivateRoute/index.js';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/search" exact component={Search} />
    <Route path="/" exact component={Home} />
    <PrivateRoute
      path="/institutions/:id"
      exact
      component={InstitutionsDetail}
    />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route component={Notfound} />
  </Switch>
);

export default Routes;
