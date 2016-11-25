import docker from '../utils/docker';

function getDefaultArgs() {
  return {
    filters: {
      type: {
        custom: true
      }
    }
  };
}

function mergeArgs(opts: Object = {}) {
  return Object.assign({}, getDefaultArgs(), opts);
}


export default {

  /**
   * getNetworks - retrieves user's created networks
   *
   * @return {Promise}     Array of networks
   */
  getNetworks(opts: Object = {}, cb: Function) {
    docker.listNetworks(mergeArgs(opts), cb);
  }
};
