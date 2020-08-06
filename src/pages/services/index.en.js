import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Card from "../../components/card"
import H2Section from "../../components/h2_section"
import "./service.css"
import TrashManDatabaseImg from "../../images/services/trash-man-db.jpg"
import QuizPartyImg from "../../images/services/quiz-party.jpg"
import ImcomeCalculator from "../../images/services/income_calculator.jpg"

const Services = props => (
  <Layout location={props.location}>
    <SEO title="Services" />
    <H2Section title="Services">
      <div className="card-wrapper">
        <Card
          name="Kuzuo Database"
          description="It is a posting site that writes a man who thinks it is a waste in
          everyday life to the extent that it does not slander himself. Mainly made with Ruby on Rails."
          imgSrc={TrashManDatabaseImg}
          link="https://trash-man-db.forest-services.net/"
        />
        <Card
          name="Quiz Party"
          description="This is a site where you can set quizzes and answer easily. Mainly made with Ruby on Rails"
          imgSrc={QuizPartyImg}
          link="https://quiz-party.forest-services.net/"
        />
        <Card
          name="Company employee's net income calculator"
          description="It is a site that roughly calculates and displays the net income just by entering the gross income as a company employee.(Japanese tax system、Android only) Made with Flutter."
          imgSrc={ImcomeCalculator}
          link="https://play.google.com/store/apps/details?id=com.yuforest.disposal_income_calculator"
        />
      </div>
    </H2Section>
  </Layout>
)

export default Services
