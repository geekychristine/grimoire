import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import { StaticQuery, graphql } from "gatsby";
import "../../css/main.scss";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { data, children } = this.props;

    return (
      <Fragment>
        <Header siteTitle={data.title} />
        <div className="gr-layout">
          <main>
            {React.Children.map(children, child =>
              React.cloneElement(child, { ...child.props, data: data })
            )}
          </main>
          <footer>© {new Date().getFullYear()}</footer>
        </div>
      </Fragment>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            baseApi
          }
        }
      }
    `}
    render={data => <Layout data={data.site.siteMetadata} {...props} />}
  />
);
