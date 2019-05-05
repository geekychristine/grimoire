import React, { Component } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { fetcher } from "../utils/fetch";

import Loader from "../components/Loader/Loader";
import InfoItem from "../components/InfoItem/InfoItem";
import Card from "../components/Card/Card";
import Section from "../components/Section/Section";
import Flag from "../components/Flag/Flag";
import Heading from "../components/Heading/Heading";

class Spell extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.baseClass = "gr-spell";
    this.spellId = props.location.search.replace("?id=", "");

    this.getSpellDetail = this.getSpellDetail.bind(this);
    this.renderList = this.renderList.bind(this);
    this.successResponse = this.successResponse.bind(this);
    this.failureResponse = this.failureResponse.bind(this);
    this.renderSection = this.renderSection.bind(this);
    this.renderDescriptions = this.renderDescriptions.bind(this);

    // InfoItem Schemas
    this.casting = [
      { title: "Casting Time", key: "casting_time" },
      { title: "Duration", key: "duration" }
    ];
    this.classes = [
      { title: "Classes", key: "classes", func: this.renderList },
      { title: "Sub-Classes", key: "subclasses", func: this.renderList },
      { title: "School", key: "school.name" }
    ];
    this.specs = [
      { title: "Components", key: "components", func: this.renderList },
      { title: "Range", key: "range" },
      { title: "Concentration", key: "concentration" },
      { title: "Ritual", key: "ritual" }
    ];
    this.descriptions = [
      {
        title: "Description",
        key: "desc",
        prose: true,
        func: this.renderDescriptions
      }
    ];

    this.higherLevel = [
      {
        title: "Higher Levels",
        key: "higher_level",
        prose: true,
        func: this.renderDescriptions
      }
    ];

    this.state = {
      loading: true,
      error: null,
      spell: null
    };
  }

  async componentDidMount() {
    if (!this.state.spell) {
      this.getSpellDetail();
    }
  }

  successResponse(response) {
    this.setState({
      ...response,
      spell: response.body
    });
  }

  failureResponse(response) {
    this.setState({
      ...response,
      error: response.error
    });
  }

  async getSpellDetail() {
    this.setState({
      loading: true
    });

    await fetcher(
      { url: `${this.props.api.spells}/${this.spellId}` },
      this.successResponse,
      this.failureResponse
    );
  }

  renderSection(items) {
    const { spell } = this.state;
    return (
      <Section>
        {items.map((item, index) => {
          // Exit if property doesn't exist
          if (!spell[item.key]) {
            return null;
          }

          // If there's a special function, run that.
          if (item.func) {
            return (
              <InfoItem key={index} title={item.title}>
                {item.func(item.key)}
              </InfoItem>
            );
          }

          // Otherwise render normally.
          return (
            <InfoItem key={index} title={item.title}>
              {get(spell, item.key)}
            </InfoItem>
          );
        })}
      </Section>
    );
  }

  renderList(name) {
    const { spell } = this.state;

    return spell[name]
      ? spell[name].map((type, key) => (
          <span key={key} className={`${this.baseClass}-${name}`}>
            {type.name || type}
          </span>
        ))
      : null;
  }

  renderDescriptions(name) {
    const { spell } = this.state;

    return spell[name] ? spell[name].map(paragraph => paragraph) : null;
  }

  get components() {
    const { spell } = this.state;

    return spell
      ? spell.components.map((type, key) => (
          <span key={key} className={`${this.baseClass}-components`}>
            {type}
          </span>
        ))
      : null;
  }

  render() {
    const { spell, error, loading } = this.state;

    return error ? (
      <p>{error.message}</p>
    ) : (
      <Loader loading={loading || !spell}>
        {spell ? (
          <Card>
            <Section modifier="split">
              <Heading>{spell.name}</Heading>
              <InfoItem title="Page">{spell.page}</InfoItem>
              <Flag>Level {spell.level}</Flag>
            </Section>
            {this.renderSection(this.casting)}
            {this.renderSection(this.classes)}
            {this.renderSection(this.specs)}
            {this.renderSection(this.descriptions)}
            {this.renderSection(this.higherLevel)}
          </Card>
        ) : (
          ""
        )}
      </Loader>
    );
  }
}

export default Spell;
