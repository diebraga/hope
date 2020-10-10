import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Search from '../pages/Search/index.js';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Wellcome from '../pages/Wellcome';
import About from '../pages/About';
import Notfound from '../components/Notfound';
import Institutions from '../pages/Institutions/index.js';
import InstitutionsDetail from '../pages/InstitutionDetails/index.js';
import PrivateRoute from '../components/PrivateRoute/index.js';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/search" exact component={Search} />
    <Route path="/institutions" exact component={Institutions} />
    <Route path="/institutions/:id" exact component={InstitutionsDetail} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route path="/about" exact component={About} />
    <Route path="/" component={Wellcome} />
    <Route component={Notfound} />
  </Switch>
);

export default Routes;
