import React, { Component } from "react";

class Flag extends Component {
  static defaultProps = {
    baseClass: "gr-flag",
    element: "p"
  };

  render() {
    const { baseClass, children, element } = this.props;
    const Element = element;

    return <Element className={baseClass}>{children}</Element>;
  }
}

export default Flag;
