import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const HeaderLink = ({ children, to, style }) => (
  <Link
    to={to}
    style={{
      color: `white`,
      textDecoration: `none`,
      fontSize: `1rem`,
      padding: `5px 10px`,
      ...style
    }}
  >
    {children}
  </Link>
)

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderLink
