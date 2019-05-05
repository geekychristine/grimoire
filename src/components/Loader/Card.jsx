import React, { Component } from "react";

class Loader extends Component {
  static defaultProps = {
    baseClass: "gr-loader"
  };

  render() {
    const { baseClass, children } = this.props;

    return <div className={baseClass}>{children}</div>;
  }
}

export default Loader;
