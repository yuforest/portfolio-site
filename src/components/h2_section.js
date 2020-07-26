import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Section = styled.section`
  margin-top: 15px;
`

const H2 = styled.h2`
  margin-bottom: 10px;
`

const H2Section = ({ children, title }) => (
  <Section>
    <H2>{title}</H2>
    {children}
  </Section>
)

H2Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default H2Section
