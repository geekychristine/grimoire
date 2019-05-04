import React, { Component } from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Spell from "../containers/spell";

class SpellPage extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  render() {
    return (
      <Layout>
        <SEO title="Spell" />
        <Spell />
      </Layout>
    );
  }
}

export default SpellPage;
