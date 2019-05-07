import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { fetcher } from "../utils/fetch";

import Loader from "../components/Loader/Loader";
import Heading from "../components/Heading/Heading";

class Index extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  constructor(props) {
    super(props);

    this.getSpellList = this.getSpellList.bind(this);
    this.successResponse = this.successResponse.bind(this);
    this.failureResponse = this.failureResponse.bind(this);

    this.baseClass = "gr-spell-index";

    this.state = {
      loading: true,
      error: null,
      spells: []
    };
  }

  async componentDidMount() {
    if (!this.state.spells.length) {
      console.warn("Fetching Spell list on homepage...");
      this.getSpellList();
    }
  }

  successResponse(response) {
    this.setState({
      ...response,
      spells: response.body[0].results
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
      { url: this.props.api.spells },
      this.successResponse,
      this.failureResponse
    );
  }

  render() {
    const { spells, loading, error } = this.state;

    return (
      <Loader loading={loading} error={error}>
        <Fragment>
          <Heading element="h1">Spell List:</Heading>
          <div className={this.baseClass}>
            <ul className={`${this.baseClass}-list`}>
              {spells && spells.length ? (
                spells.map((spell, key) => {
                  const spellId = key + 1;
                  return (
                    <li key={spellId} className={`${this.baseClass}-list-item`}>
                      <Link to={`/spell/?id=${spellId}`}>{spell.name}</Link>
                    </li>
                  );
                })
              ) : (
                <li>No Spells Listed</li>
              )}
            </ul>
          </div>
        </Fragment>
      </Loader>
    );
  }
}

export default Index;
