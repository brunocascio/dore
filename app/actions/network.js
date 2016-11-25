// @flow
import network from '../api/network';

export const RECEIVE_LIST = 'NETWORK/RECEIVE_LIST';
export const ERROR = 'NETWORK/ERROR';

function receive(networks) {
  return {
    type: RECEIVE_LIST,
    networks
  };
}

function error(err) {
  return {
    type: ERROR,
    err
  };
}

export function getNetworks(opts: Object = {}) {
  return (dispatch: Function) => {
    network.getNetworks(opts, (err, data) => {
      if (err) {
        dispatch(error(err));
      } else {
        dispatch(receive(data));
      }
    });
  };
}
