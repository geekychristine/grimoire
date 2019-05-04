import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

// import SpellIndex from "../containers/SpellIndex";

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

    this.api = {
      spells: "/api/spells"
    };

    this.state = {
      loading: false,
      spells: []
    };
  }

  async componentDidMount() {
    this.getSpellList();
  }

  getSpellList() {
    // const res = await fetch(this.api.spells)
    // const data = await res.json()
    this.setState({
      loading: true
    });
    axios({ url: this.api.spells })
      .then(response => {
        this.setState({
          loading: false,
          spells: response.data.results
        });
      })
      .catch(error => {
        this.setState({ loading: false, error });
      });
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
              // const spellName = spell.name.replace(" ", "-").toLowerCase()
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
