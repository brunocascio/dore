// @flow
import network from '../api/networks';

export const RECEIVE_LIST = 'NETWORKS/RECEIVE_LIST';
export const ERROR = 'NETWORKS/ERROR';

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
