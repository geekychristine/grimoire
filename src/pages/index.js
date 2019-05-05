import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { fetcher } from "../utils/fetch";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

class IndexPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    baseClass: PropTypes.string
  };

  static defaultProps = {
    baseClass: "grim-home-page"
  };

  constructor(props) {
    super(props);

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
      loading: false,
      error: null,
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
    const { spells, loading } = this.state;

    return !loading ? (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Spell List:</h1>
        <ul>
          {spells && spells.length ? (
            spells.map((spell, key) => {
              const spellId = key + 1;
              return (
                <li key={spellId}>
                  <Link to={`/spell?id=${spellId}&url=${spell.url}`}>
                    {spell.name}
                  </Link>
                </li>
              );
            })
          ) : (
            <li>No Spells Listed</li>
          )}
        </ul>
      </Layout>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default IndexPage;
