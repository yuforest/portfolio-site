import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import H2Section from "../../components/h2_section"
import SkillGraphs from '../../components/skill_graphs'


const About = props => (
  <Layout location={props.location}>
    <SEO title="About" />
    <H2Section title="自己紹介">
      <p>東京在住のWeb系エンジニアです。</p>
      <p>
        新卒では鉄道業界に入りましたが、1年目にして退職し、タイで1ヶ月ほど羽を伸ばしたあとエンジニア見習いとして働き始めました。
      </p>
      <p>
        その会社で1年半ほどRails, Vue,
        WordPressなどを用いた開発を経験した後、退職し、現在は個人事業主として仕事をしたり、サービス開発をしています。
      </p>
      <p>
        このサイトは普段触れたことがない技術に触れようと思い、静的サイトジェネレータであるGatsby.jsを使って作りました。
      </p>
      <p>触れたことがある言語やフレームワークは下記になります。</p>
    </H2Section>
    <H2Section title="言語・フレームワーク">
      <div>
        <div
          style={{
            color: `#F47064`,
            fontWeight: `bold`,
            border: `1px solid #F47064`,
            display: `inline-block`,
            padding: `15px`,
          }}
        >
          <p>Level1: 少し触ったことがある</p>
          <p>Level2: 調べたり人に聞きながら開発ができる</p>
          <p>Level3: 日常的に使って開発している</p>
        </div>
        <SkillGraphs />
      </div>
    </H2Section>
  </Layout>
)

export default About
