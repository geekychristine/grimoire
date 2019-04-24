import React, { Component } from "react";

import Heading from "../Heading/Heading";

class InfoItem extends Component {
  static defaultProps = {
    baseClass: "grim-info-item",
    title: "Title"
  };

  render() {
    const { baseClass, children, title } = this.props;

    return (
      <div className={baseClass}>
        <Heading element="h3" className={`${baseClass}-title`}>
          {title}:
        </Heading>
        <p className={`${baseClass}-value`}>{children}</p>
      </div>
    );
  }
}

export default InfoItem;
