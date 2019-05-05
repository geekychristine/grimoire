import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  static propTypes = {
    children: PropTypes.node,
    siteTitle: PropTypes.string
  };

  static defaultProps = {
    siteTitle: ``
  };

  constructor(props) {
    super(props);

    this.baseClass = "gr-footer";
  }

  render() {
    return (
      <footer className={this.baseClass}>
        <div className={`${this.baseClass}-container`}>
          © {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
}

export default Footer;
