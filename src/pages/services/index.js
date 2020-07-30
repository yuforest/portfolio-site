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
      <div className="card-wrapper">
        <Card
          name="クズ男データベース"
          description="日常生活の中でクズだと思った男性について個人の中傷にならない範囲で情報を共有する投稿サイトです。"
          imgSrc="https://www.pakutaso.com/shared/img/thumb/MIZUHO19217003_TP_V.jpg"
          link="https://trash-man-db.forest-services.net/"
        />
      </div>
    </H2Section>
  </Layout>
)

export default Services
