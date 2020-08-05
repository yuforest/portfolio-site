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
    <H2Section title="運営サービス一覧">
      <div className="card-wrapper">
        <Card
          name="クズ男データベース"
          description="日常生活の中でクズだと思った男性について個人の中傷にならない範囲で情報を共有する投稿サイトです。"
          imgSrc={TrashManDatabaseImg}
          link="https://trash-man-db.forest-services.net/"
        />
        <Card
          name="クイズパーティー"
          description="クイズを出題したり、簡単に他の人のクイズに回答できるクイズプラットフォームです。"
          imgSrc={QuizPartyImg}
          link="https://quiz-party.forest-services.net/"
        />
      </div>
    </H2Section>
  </Layout>
)

export default Services
