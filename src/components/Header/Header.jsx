import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

class Header extends Component {
  static propTypes = {
    children: PropTypes.node,
    baseClass: PropTypes.string,
    siteTitle: PropTypes.string
  };

  static defaultProps = {
    siteTitle: ``
  };

  constructor(props) {
    super(props);

    this.baseClass = "gr-header";
  }

  render() {
    const { children, siteTitle } = this.props;

    return (
      <header className={this.baseClass}>
        <div className={`${this.baseClass}-container`}>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          {children}
        </div>
      </header>
    );
  }
}

export default Header;
