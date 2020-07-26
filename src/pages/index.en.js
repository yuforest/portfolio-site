import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ButtonLink from "../components/button_link"
import SnsLinks from "../components/sns_links"
import H2Section from "../components/h2_section"

const IndexPage = props => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <H2Section title="About">
      <p>I'm Web developer living in Tokyo.</p>
      <p>Recently I develop web services i wanna create.</p>
      <ButtonLink to="/about">More</ButtonLink>
    </H2Section>
    <H2Section title="Services">
      <p>I developed services like below.</p>
      <ButtonLink to="/services">More</ButtonLink>
    </H2Section>
    <H2Section title="Contact">
      <p>SNS Accounts</p>
      <SnsLinks />
      <ButtonLink to="/contact">Contact form</ButtonLink>
    </H2Section>
  </Layout>
)

export default IndexPage
