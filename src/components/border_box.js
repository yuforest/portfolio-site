import React from "react"
import PropTypes from "prop-types"

const BorderBox = ({ children }) => (
  <div
    style={{
      color: `#F47064`,
      fontWeight: `bold`,
      border: `1px solid #F47064`,
      display: `inline-block`,
      padding: `15px`,
    }}
  >{children}</div>
)

BorderBox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BorderBox
