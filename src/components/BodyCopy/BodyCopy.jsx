import React, { Component } from "react";

class BodyCopy extends Component {
  static defaultProps = {
    baseClass: "gr-body-copy",
    element: "p"
  };

  render() {
    const { baseClass, children, element } = this.props;
    const Element = element;

    return <Element className={baseClass}>{children}</Element>;
  }
}

export default BodyCopy;
