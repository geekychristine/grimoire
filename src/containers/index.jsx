import React from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import "../css/styles.scss";

class Index extends React.Component {
  static api = {
    spells: "http://dnd5eapi.co/api/spells"
  };

  static async getInitialProps() {
    const res = await fetch(this.api.spells);
    const data = await res.json();

    // Save result in cache
    window.CacheStorage.open("spellList").then(cache =>
      cache.add(this.api.spells)
    );

    return {
      spells: data.results
    };
  }

  render() {
    const { spells } = this.props;

    return (
      <Layout>
        <h1>Spells</h1>
        <ul>
          {spells &&
            spells.map((spell, key) => {
              const spellId = key + 1;
              const spellName = spell.name.replace(" ", "-").toLowerCase();
              return (
                <li key={spellId}>
                  <Link
                    as={`/spell/${spellName}`}
                    href={`/spell?id=${spellId}&url=${spell.url}`}
                    prefetch
                  >
                    <a>{spell.name}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </Layout>
    );
  }
}

export default Index;
