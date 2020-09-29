import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Notfound from '../components/Notfound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route component={Notfound} />
  </Switch>
);

export default Routes;
