import React, { Component } from "react";

class Heading extends Component {
  static defaultProps = {
    baseClass: "gr-heading",
    element: "h3"
  };

  render() {
    const { baseClass, children, element } = this.props;
    const Element = element;

    return <Element className={baseClass}>{children}</Element>;
  }
}

export default Heading;
