import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main/index.js';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Notfound from '../components/Notfound';
import Institutions from '../pages/Institutions/index.js';
import InstitutionsDetail from '../pages/InstitutionDetails/index.js';
import PrivateRoute from '../components/PrivateRoute/index.js';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/institutions" component={Institutions} />
    <PrivateRoute path="/institutions/:id" component={InstitutionsDetail} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route component={Notfound} />
  </Switch>
);

export default Routes;
