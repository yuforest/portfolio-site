import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ButtonLink = ({ children, to }) => (
  <Link
    to={to}
    style={{
      textDecoration: `none`,
      color: `white`,
      padding: `10px 20px`,
      backgroundColor: `#F3921F`,
      fontWeight: `bold`,
      borderRadius: "10px",
      fontSize: `16px`,
      margin: `10px 0`,
      display: `inline-block`,
    }}
  >
    {children}
  </Link>
)

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ButtonLink
