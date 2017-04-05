// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import Networks from './containers/networks';
import Network from './containers/network';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Networks} />
    <Route path="/networks" component={Networks} />
    <Route path="/network/:network" component={Network} />
  </Route>
);
