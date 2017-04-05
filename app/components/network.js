// @flow
import React, { Component, PropTypes } from 'react';
import Graph from './Graph';

export default class NetworkComponent extends Component {

  static propTypes = {
    onLoad: PropTypes.func.isRequired,
    containers: PropTypes.arrayOf(PropTypes.shape).isRequired
  };

  componentWillMount() {
    const { params } = this.props;
    this.props.onLoad(params.network);
  }

  render() {
    const { containers } = this.props;

    const edges = [];

    const nodes = containers.map((c) => {
      return {
        id: c.Id,
        label: c.Name
      }
    });

    return <Graph nodes={nodes} edges={edges} />;
  }
}
