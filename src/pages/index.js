import React, { Component } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    baseClass: PropTypes.string,
  }

  static defaultProps = {
    baseClass: "grim-home-page",
  }

  constructor(props) {
    super(props)

    this.getSpellList = this.getSpellList.bind(this)

    this.api = {
      spells: "http://dnd5eapi.co/api/spells",
    }

    this.state = {
      spells: [],
    }
  }

  componentDidMount() {
    this.getSpellList()
  }

  getSpellList() {
    // const res = await fetch(this.api.spells)
    // const data = await res.json()
    this.setState({
      loading: true,
    })
    console.warn("this.api.spells:", this.api.spells)
    axios({ url: this.api.spells })
      .then(response => {
        console.warn("response:", response)
        this.setState({
          loading: false,
          spells: response.data.results,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  render() {
    const { spells, loading } = this.state
    return !loading ? (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <ul>
          {spells &&
            spells.map((spell, key) => {
              const spellId = key + 1
              // const spellName = spell.name.replace(" ", "-").toLowerCase()
              return (
                <li key={spellId}>
                  <Link to={`/spell?id=${spellId}&url=${spell.url}`}>
                    {spell.name}
                  </Link>
                </li>
              )
            })}
        </ul>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/spell/?id=1">Go to page 2</Link>
      </Layout>
    ) : (
      <p>Loading...</p>
    )
  }
}

export default IndexPage
