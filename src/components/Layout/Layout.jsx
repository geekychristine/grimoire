import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import { StaticQuery, graphql } from "gatsby"
import "../../css/main.scss"

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { data, children } = this.props

    return (
      <Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="grim-layout">
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </div>
      </Fragment>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
