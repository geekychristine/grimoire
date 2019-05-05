import React, { Component } from "react";

import InfoItem from "../components/InfoItem/InfoItem";
import Card from "../components/Card/Card";
import Section from "../components/Section/Section";
import Flag from "../components/Flag/Flag";
import Heading from "../components/Heading/Heading";

class Spell extends Component {
  constructor(props) {
    super(props);

    this.classes = this.listClasses.bind(this);
  }

  static defaultProps = {
    baseClass: "grim-spell"
  };

  listClasses(name) {
    const { spell, baseClass } = this.props;
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
    const { spell, baseClass } = this.props;

    return spell
      ? spell.components.map((type, key) => (
          <span key={key} className={`${baseClass}-components`}>
            {type}
          </span>
        ))
      : null;
  }

  render() {
    const { spell } = this.props;

    return spell ? (
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
    ) : null;
  }
}

export default Spell;
