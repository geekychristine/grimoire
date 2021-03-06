import React, { Component } from "react";

class Card extends Component {
  static defaultProps = {
    baseClass: "gr-card"
  };

  render() {
    const { baseClass, children } = this.props;

    return <div className={baseClass}>{children}</div>;
  }
}

export default Card;
