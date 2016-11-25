// @flow
import { connect } from 'react-redux';
import Graph from '../../components/Graph';
import { getNetworks } from '../../actions/network';

function mapStateToProps(state) {
  return {
    networks: state.network.networks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(getNetworks())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Graph);
