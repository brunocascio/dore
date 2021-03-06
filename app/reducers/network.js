// @flow
import { RECEIVE_LIST, ERROR } from '../actions/network';

const initial = {
  containers: [],
  error: false
};

export default (state: Object = initial, action: Object) => {

  switch (action.type) {

    case RECEIVE_LIST:
      return Object.assign({}, state, {
        containers: action.containers
      });

    case ERROR:
      return Object.assign({}, initial, {
        error: action.error
      });

    default:
      return state;
  }
}
