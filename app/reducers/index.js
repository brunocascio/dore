// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import network from './network';

const rootReducer = combineReducers({
  counter,
  network,
  routing
});

export default rootReducer;
