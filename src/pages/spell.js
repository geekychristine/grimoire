import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetcher } from "../utils/fetch";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Spell from "../containers/spell";

class SpellPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    baseClass: PropTypes.string
  };

  static defaultProps = {
    baseClass: "gr-home-page"
  };

  constructor(props) {
    super(props);

    console.warn("props:", props);

    this.getSpellList = this.getSpellList.bind(this);
    this.successResponse = this.successResponse.bind(this);
    this.failureResponse = this.failureResponse.bind(this);

    this.api = {
      spells: "/api/spells"
    };

    this.state = {
      loading: false,
      error: null,
      spells: []
    };
  }

  async componentDidMount() {
    this.getSpellList();
  }

  successResponse(response) {
    this.setState({
      ...response,
      spells: response.body.results
    });
  }

  failureResponse(response) {
    this.setState({
      loading: false,
      error: response.body,
      spells: []
    });
  }

  async getSpellList() {
    this.setState({
      loading: true
    });

    await fetcher(
      { url: this.api.spells },
      this.successResponse,
      this.failureResponse
    );
  }

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
