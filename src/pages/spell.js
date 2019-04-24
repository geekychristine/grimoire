import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

class SpellPage extends Component {
  static propTypes = {
    location: PropTypes.object,
  }

  render() {
    return (
      <Layout>
        <SEO title="Spell" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SpellPage
