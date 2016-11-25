// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import GraphPage from './containers/Graph';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={GraphPage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/graph" component={GraphPage} />
  </Route>
);
