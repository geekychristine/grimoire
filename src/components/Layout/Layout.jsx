import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../css/main.scss";

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { data, children } = this.props;

    const api = {
      spells: `${data.apiBase}${data.apiSpells}`,
      spellId: `${data.apiBase}${data.apiSpellId}`
    };

    return (
      <Fragment>
        <Header siteTitle={data.title} />
        <div className="gr-layout">
          <main>
            {React.Children.map(children, child =>
              React.cloneElement(child, { ...child.props, data: data, api })
            )}
          </main>
        </div>
        <Footer />
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
            apiBase
            apiSpells
            apiSpellId
          }
        }
      }
    `}
    render={data => <Layout data={data.site.siteMetadata} {...props} />}
  />
);
