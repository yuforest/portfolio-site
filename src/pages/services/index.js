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
    <H2Section title="運営サービス一覧">
      <div className="card-wrapper">
        <Card
          name="クズ男データベース"
          description="日常生活の中でクズだと思った男性について個人の中傷にならない範囲で情報を共有する投稿サイトです。Ruby on Railsで作りました。"
          imgSrc={TrashManDatabaseImg}
          link="https://trash-man-db.forest-services.net/"
        />
        <Card
          name="クイズパーティー"
          description="クイズを出題したり、簡単に他の人のクイズに回答できるクイズプラットフォームです。Ruby on Railsで作りました。"
          imgSrc={QuizPartyImg}
          link="https://quiz-party.forest-services.net/"
        />
        <Card
          name="会社員の年収手取り計算機"
          description="会社員としての年収を入力するだけで手取りをざっくりと計算し表示してくれるサイトです。(日本の税制に対応、Android版のみ)Flutterで作りました。"
          imgSrc={ImcomeCalculator}
          link="https://play.google.com/store/apps/details?id=com.yuforest.disposal_income_calculator"
        />
      </div>
    </H2Section>
  </Layout>
)

export default Services
