import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Card from "../../components/card"
import H2Section from "../../components/h2_section"
import "./service.css"

const Services = props => (
  <Layout location={props.location}>
    <SEO title="Services" />
    <H2Section title="運営サービス一覧">
      <div
        className="card-wrapper"
      >
        <Card
          name="Kuzuo Database"
          description="It is a posting site that writes a man who thinks it is a waste in
          everyday life to the extent that it does not slander himself."
          imgSrc="https://www.pakutaso.com/shared/img/thumb/MIZUHO19217003_TP_V.jpg"
          link="#"
        />
        <Card
          name="Kuzuo Database"
          description="It is a posting site that writes a man who thinks it is a waste in
          everyday life to the extent that it does not slander himself."
          imgSrc="https://www.pakutaso.com/shared/img/thumb/MIZUHO19217003_TP_V.jpg"
          link="#"
        />
        <Card
          name="Kuzuo Database"
          description="It is a posting site that writes a man who thinks it is a waste in
          everyday life to the extent that it does not slander himself."
          imgSrc="https://www.pakutaso.com/shared/img/thumb/MIZUHO19217003_TP_V.jpg"
          link="#"
        />
        <Card
          name="Kuzuo Database"
          description="It is a posting site that writes a man who thinks it is a waste in
          everyday life to the extent that it does not slander himself."
          imgSrc="https://www.pakutaso.com/shared/img/thumb/MIZUHO19217003_TP_V.jpg"
          link="#"
        />
        <Card
          name="Kuzuo Database"
          description="It is a posting site that writes a man who thinks it is a waste in
          everyday life to the extent that it does not slander himself."
          imgSrc="https://www.pakutaso.com/shared/img/thumb/MIZUHO19217003_TP_V.jpg"
          link="#"
        />
      </div>
    </H2Section>
  </Layout>
)

export default Services