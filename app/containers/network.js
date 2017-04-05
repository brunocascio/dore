// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Network from '../components/network';
import * as Actions from '../actions/network';

function mapStateToProps(state) {
  return {
    ...state.network
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Network);
