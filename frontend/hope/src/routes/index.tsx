import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main/index.js';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Notfound from '../components/Notfound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route component={Notfound} />
    <Route component={Signin} />
  </Switch>
);

export default Routes;
