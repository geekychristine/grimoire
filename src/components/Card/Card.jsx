import React, { Component } from "react";

class Card extends Component {
  static defaultProps = {
    baseClass: "grim-card"
  };

  render() {
    const { baseClass, children } = this.props;

    return <div className={baseClass}>{children}</div>;
  }
}

export default Card;
