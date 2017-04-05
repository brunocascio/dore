// @flow
import network from '../api/network';

export const RECEIVE_LIST = 'NETWORK/RECEIVE_LIST';
export const ERROR = 'NETWORK/ERROR';

function receive(containers) {
  const ids = Object.keys(containers);
  const cs = ids.map((Id) => {
    return {...containers[Id], Id}
  });
  return {
    type: RECEIVE_LIST,
    containers: cs
  };
}

function error(err) {
  return {
    type: ERROR,
    err
  };
}

export const onLoad = (network) => {
  return (dispatch) => {
    const filters = { network: [network] }
    dispatch(getContainers({filters,}))
  }
}

export const getContainers = (opts: Object = {}) => {
  return (dispatch: Function) => {
    network.getContainers(opts, (err, data) => {
      if (err) {
        dispatch(error(err));
      } else {
        dispatch(receive(data.Containers));
      }
    });
  };
}
