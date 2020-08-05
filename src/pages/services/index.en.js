import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Card from "../../components/card"
import H2Section from "../../components/h2_section"
import "./service.css"
import TrashManDatabaseImg from "../../images/services/trash-man-db.jpg"
import QuizPartyImg from "../../images/services/quiz-party.jpg"

const Services = props => (
  <Layout location={props.location}>
    <SEO title="Services" />
    <H2Section title="Services">
      <div className="card-wrapper">
        <Card
          name="Kuzuo Database"
          description="It is a posting site that writes a man who thinks it is a waste in
          everyday life to the extent that it does not slander himself."
          imgSrc={TrashManDatabaseImg}
          link="https://trash-man-db.forest-services.net/"
        />
        <Card
          name="Quiz Party"
          description="This is a site where you can set quizzes and answer easily."
          imgSrc={QuizPartyImg}
          link="https://quiz-party.forest-services.net/"
        />
      </div>
    </H2Section>
  </Layout>
)

export default Services
