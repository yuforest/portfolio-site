import React from "react"
import "typeface-noto-sans"
const Footer = () => (
  <footer
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 1.0875rem 1.45rem`,
      fontFamily: `Noto Sans`
    }}
  >
    <div style={{ width: `100%` }}>
      <div style={{ textAlign: `center` }}>
        © {new Date().getFullYear()} Yuta Omori.
      </div>
    </div>
  </footer>
)
export default Footer