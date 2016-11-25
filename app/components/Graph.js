// @flow
import React, { Component, PropTypes } from 'react';
import Graph from 'react-graph-vis';
import styles from './Graph.css';

export default class GraphComponent extends Component {

  static propTypes = {
    onLoad: PropTypes.func.isRequired,
    networks: PropTypes.arrayOf(PropTypes.shape)
  };

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    const { networks } = this.props;
    // const data = {
    //   nodes: [
    //     { id: 1, label: 'Node 1' },
    //     { id: 2, label: 'Node 2' },
    //     { id: 3, label: 'Node 3' },
    //     { id: 4, label: 'Node 4' },
    //     { id: 5, label: 'Node 5' }
    //   ],
    //   edges: [
    //     { from: 1, to: 2 },
    //     { from: 1, to: 3 },
    //     { from: 2, to: 4 },
    //     { from: 2, to: 5 }
    //   ]
    // };
    return (
      <div>
        <div className={styles.container}>
          <h2>Graph</h2>
          <ul>
            {networks.map((network, index) => (<li key={index}>{network.Name}</li>))}
          </ul>
          {/* <Graph graph={data} /> */}
        </div>
      </div>
    );
  }
}
