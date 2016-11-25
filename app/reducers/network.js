// @flow
import { RECEIVE_LIST, ERROR } from '../actions/network';

const initial = {
  networks: [],
  error: false
};

export default function network(state: Object = initial, action: Object) {
  switch (action.type) {
    case RECEIVE_LIST:
    console.log(action.networks);
      return Object.assign({}, state, {
        networks: action.networks
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
