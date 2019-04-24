import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

class Header extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    baseClass: PropTypes.string.isRequired,
    siteTitle: PropTypes.string.isRequired,
  }

  static defaultProps = {
    baseClass: "grim-header",
  }

  render() {
    const { baseClass, children, siteTitle } = this.props

    return (
      <header className={baseClass}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        {children}
      </header>
    )
  }
}

export default Header
