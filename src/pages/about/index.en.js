import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SkillGraphs from "../../components/skill_graphs"
import H2Section from "../../components/h2_section"
import BorderBox from "../../components/border_box"

const About = props => (
  <Layout location={props.location}>
    <SEO title="Page two" />
    <H2Section title="About me">
      <p>I'm Web developer living in Tokyo.</p>
      <p>
        After I graduated collage, I started my first career working at railway
        company. But I retired the company in the first year, and started career
        as web developer.(I had a little time to spare so I went on a trip to
        Thailand for about a month)
      </p>
      <p>
        I worked for first company as web developer for a year and half. In that
        company, I engaged in the development of web applictions and websites
        using Ruby on Rails, Vue.js, WordPress and so on. After thet I retired
        that company, I started working as freelance and developing my service.
      </p>
      <p>
        I made this site using Gatsby.js.(I wanted to use framework I have never
        used.)
      </p>
      <p>The technologies I've used in thw past are as follows.</p>
    </H2Section>
    <H2Section title="Technology">
      <div>
        <BorderBox>
          <p>Level1: Novice</p>
          <p>Level2: Have used it several times</p>
          <p>Level3: I often develop using it</p>
        </BorderBox>
        <SkillGraphs />
      </div>
    </H2Section>
  </Layout>
)

export default About
