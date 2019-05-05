import React, { Component } from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Spell from "../containers/spell";

class SpellPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Spell" />
        <Spell {...this.props} />
      </Layout>
    );
  }
}

export default SpellPage;
