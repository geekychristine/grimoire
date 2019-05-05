import React, { Component } from "react";
import PropTypes from "prop-types";
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
    baseClass: PropTypes.string
  };

  static defaultProps = {
    baseClass: "gr-spell-detail"
  };

  constructor(props) {
    super(props);

    console.warn("props:", props);

    this.getSpellList = this.getSpellList.bind(this);
    this.successResponse = this.successResponse.bind(this);
    this.failureResponse = this.failureResponse.bind(this);

    this.state = {
      loading: true,
      error: null,
      spell: null
    };
  }

  async componentDidMount() {
    if (!this.state.spell) {
      console.warn("Fetching Spell list on spell page...");
      this.getSpellList();
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

  async getSpellList() {
    this.setState({
      loading: true
    });

    await fetcher(
      { url: `${this.props.api.spells}/1` },
      this.successResponse,
      this.failureResponse
    );
  }

  listClasses(name) {
    const { baseClass } = this.props;
    const { spell } = this.state;
    console.warn("spell[name]:", spell[name]);

    return spell[name]
      ? spell[name].map((classType, key) => (
          <span key={key} className={`${baseClass}-class`}>
            {classType.name}
          </span>
        ))
      : null;
  }

  get components() {
    const { baseClass } = this.props;
    const { spell } = this.state;

    return spell
      ? spell.components.map((type, key) => (
          <span key={key} className={`${baseClass}-components`}>
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
              <Flag>Level {spell.level}</Flag>
            </Section>

            <Section>
              <InfoItem title="Casting Time">{spell.casting_time}</InfoItem>
              <InfoItem title="Duration">{spell.duration}</InfoItem>
              <InfoItem title="Page">{spell.page}</InfoItem>
            </Section>

            <Section>
              <InfoItem title="Classes">{this.listClasses("classes")}</InfoItem>
              <InfoItem title="Sub-Classes">
                {this.listClasses("subclasses")}
              </InfoItem>
            </Section>
            <Section>
              <InfoItem title="School">{spell.school.name}</InfoItem>
              <InfoItem title="Components">{this.components}</InfoItem>
              <InfoItem title="Range">{spell.range}</InfoItem>
            </Section>
            <Section>
              <InfoItem title="Concentration">{spell.concentration}</InfoItem>
              <InfoItem title="Ritual">{spell.ritual}</InfoItem>
            </Section>

            <Section>
              <InfoItem title="Description">{spell.desc[0]}</InfoItem>
            </Section>
          </Card>
        ) : (
          ""
        )}
      </Loader>
    );
  }
}

export default Spell;
