import React, { Component } from "react";

import Heading from "../Heading/Heading";

class InfoItem extends Component {
  static defaultProps = {
    baseClass: "gr-info-item",
    title: "Title"
  };

  render() {
    const { baseClass, children, title } = this.props;

    return (
      <div className={baseClass}>
        <Heading element="h3" className={`${baseClass}-title`}>
          {title}:
        </Heading>
        {children && children.length === 1 ? (
          <p className={`${baseClass}-value`}>{children}</p>
        ) : (
          React.Children.map(children, child => (
            <p className={`${baseClass}-value`}>{child}</p>
          ))
        )}
      </div>
    );
  }
}

export default InfoItem;
