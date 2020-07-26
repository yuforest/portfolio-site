import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import H2Section from "../components/h2_section"
import ButtonLink from "../components/button_link"

const NotFoundPage = props => (
  <Layout location={props.location}>
    <SEO title="404: Not found" />
    <H2Section title="NOT FOUND">
      <p>We coundn't find that page.</p>
      <ButtonLink to="/">Back to Top</ButtonLink>
    </H2Section>
  </Layout>
)

export default NotFoundPage
