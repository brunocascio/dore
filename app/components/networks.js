// @flow
import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

export default class NetworksComponent extends Component {

  static propTypes = {
    onLoad: PropTypes.func.isRequired,
    networks: PropTypes.arrayOf(PropTypes.shape)
  };

  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    const { networks } = this.props;
    return (
      <div>
        <h2>Topologías</h2>
        <ul>
          {networks.map((network, index) => (
            <li key={index}>
              <Link to={`/network/${network.Id}`}>
                {network.Name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
