// @flow
import { RECEIVE_LIST, ERROR } from '../actions/networks';

const initial = {
  networks: [],
  error: false
};

export default (state: Object = initial, action: Object) => {

  switch (action.type) {

    case RECEIVE_LIST:
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
