import React, { Component } from "react";
import PropTypes from "prop-types";

class Loader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool
  };

  static defaultProps = {
    baseClass: "gr-loader"
  };

  render() {
    const { loading, children } = this.props;

    return loading ? <div className="gr-loader">Loading...</div> : children;
  }
}

export default Loader;
