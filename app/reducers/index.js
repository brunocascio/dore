// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import networks from './networks';
import network from './network';

const rootReducer = combineReducers({
  networks,
  network,
  routing
});

export default rootReducer;
