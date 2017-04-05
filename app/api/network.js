import docker from '../utils/docker';

function getDefaultArgs() {
  return {
    all: true
  };
}

function mergeArgs(opts: Object = {}) {
  return Object.assign({}, getDefaultArgs(), opts);
}


export default {

  /**
   * getContainers - retrieves user's created containers
   *
   * @return {Promise}     Array of containers
   */
  getContainers(opts: Object = {}, cb: Function) {
    const net = docker.getNetwork(opts.filters.network)
    net.inspect(cb);
  }
};
