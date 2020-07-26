import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ButtonLink from "../components/button_link"
import SnsLinks from "../components/sns_links"
import H2Section from "../components/h2_section"



const IndexPage = props => {
  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <H2Section title="About">
        <p>東京在住のWeb系エンジニアです。</p>
        <p>最近は個人でWebサービスを作ったりしています。</p>
        <ButtonLink to="/about">もっと見る</ButtonLink>
      </H2Section>
      <H2Section title="Services">
        <p>下記のようなサイトを作っています。</p>
        <ButtonLink to="/services">もっと見る</ButtonLink>
      </H2Section>
      <H2Section title="Contact">
        <p>SNSはこちら</p>
        <SnsLinks />
        <ButtonLink to="/contact">コンタクトフォームから連絡</ButtonLink>
      </H2Section>
    </Layout>
  )
}

export default IndexPage
