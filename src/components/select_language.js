import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

const SelectLanguage = props => {
  const links = props.langs.map(lang => (
    <Link
      to={lang.link}
      key={lang.langKey}
      style={{
        color: props.current == lang.langKey ? "#111188" : "#C1EEFB",
        textDecoration: `none`,
        textTransform: `uppercase`,
        padding: `5px 8px`,
        fontWeight: props.current == lang.langKey ? `900` : `700`,
        fontSize: `16px`
      }}
    >
      <li selected={lang.selected} style={{ listStyleType: `none` }}>
        {lang.langKey}
      </li>
    </Link>
  ))

  return (
    <section>
      <ul style={{display: `flex`, margin: 0}}>{links}</ul>
    </section>
  )
}

SelectLanguage.propTypes = {
  langs: PropTypes.array,
}

export default SelectLanguage
