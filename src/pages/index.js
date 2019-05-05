import React, { Component } from "react";

import Layout from "../components/Layout/Layout";
import Index from "../containers/index";
import SEO from "../components/seo";

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Index />
      </Layout>
    );
  }
}

export default IndexPage;
