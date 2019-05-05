import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { fetcher } from "../utils/fetch";

import Loader from "../components/Loader/Loader";

class Index extends Component {
  static propTypes = {
    children: PropTypes.node,
    baseClass: PropTypes.string
  };

  static defaultProps = {
    baseClass: "gr-home-page"
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
      ...response,
      spells: response.body.results
    });
  }

  failureResponse(response) {
    this.setState({
      ...response,
      error: response.error,
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

    return (
      <Loader loading={loading}>
        <Fragment>
          <h1>Spell List:</h1>
          <ul>
            {spells && spells.length ? (
              spells.map((spell, key) => {
                const spellId = key + 1;
                return (
                  <li key={spellId}>
                    <Link to={`/spell?id=${spellId}`}>{spell.name}</Link>
                  </li>
                );
              })
            ) : (
              <li>No Spells Listed</li>
            )}
          </ul>
        </Fragment>
      </Loader>
    );
  }
}

export default Index;
