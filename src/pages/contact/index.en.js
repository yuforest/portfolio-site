import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SnsLinks from "../../components/sns_links"
import H2Section from "../../components/h2_section"
import ContactForm from "../../components/contact_form_en"

const Contact = props => (
  <Layout location={props.location}>
    <SEO title="Page two" />
    <H2Section title="SNS">
      <SnsLinks />
    </H2Section>
    <H2Section title="Contact Form">
      <ContactForm />
    </H2Section>
  </Layout>
)

export default Contact
