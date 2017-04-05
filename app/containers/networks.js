// @flow
import { connect } from 'react-redux';
import Networks from '../components/networks';
import { getNetworks } from '../actions/networks';

function mapStateToProps(state) {
  return {
    ...state.networks
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
)(Networks);
