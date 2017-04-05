// @flow
import React, { Component, PropTypes } from 'react';
import Graph from 'react-graph-vis';

export default class GraphComponent extends Component {

  static propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.shape),
    edges: PropTypes.arrayOf(PropTypes.shape),
    options: PropTypes.arrayOf(PropTypes.shape),
    events: PropTypes.arrayOf(PropTypes.shape),
  };

  render() {
    const { nodes, edges, options, events } = this.props;

    const defaultOpts = {
      layout: {
        hierarchical: false
      }
    }

    // Default Options
    const opts = Object.assign({}, defaultOpts, options)

    if (!nodes.length) return null;

    return <Graph graph={{nodes, edges,}} options={opts} events={events} />
  }
}
