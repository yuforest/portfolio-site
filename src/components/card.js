import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import "./card.css"

const HeaderLink = ({ name, description, imgSrc, link }) => (
  <div className="card">
    <div style={{ height: `150px` }}>
      <img
        src={imgSrc}
        alt="service"
        style={{ width: `100%`, height: `100%`, objectFit: `cover` }}
      />
    </div>
    <div style={{ margin: `10px` }}>
      <h3 style={{ fontSize: `1rem` }}>
        <a href={link} target="_blank" rel="noreferrer" className="card-link">
          {name} <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </h3>
      <p style={{ fontSize: `0.8rem` }}>{description}</p>
    </div>
  </div>
)

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeaderLink
