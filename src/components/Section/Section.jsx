import React, { Component } from "react";
import classnames from "classnames";

class Section extends Component {
  static defaultProps = {
    baseClass: "grim-section",
    modifierClass: null
  };

  render() {
    const { baseClass, children, modifier } = this.props;
    const modifierClass = modifier ? `${baseClass}--${modifier}` : null;

    return (
      <div className={classnames(baseClass, modifierClass)}>{children}</div>
    );
  }
}

export default Section;
