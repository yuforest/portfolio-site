import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import HeaderLink from "../components/header_link.js"
import SelectLanguage from "./select_language.js"
import "typeface-noto-sans"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExternalLinkAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import "./header.css"

class Header extends Component {
  state = {
    menu: false,
  }

  toggleDrawer = (side) => () => {
    this.setState({
      [side]: !this.state.menu,
    })
    console.log(this.state.menu)
  }
  render() {
    let { url, siteTitle, langs } = this.props
    let lang = ""
    let currentLang = "ja"
    if (url.match(/\/en\//) !== null) {
      lang = "/en"
      currentLang = "en"
      siteTitle = "Morio's portfolio"
    }
    let paths = url.split("/").filter(e => Boolean(e))
    const lastPath = paths[paths.length - 1]
    return (
      <header className="header">
        <div className="site-title-container">
          <h1>
            <Link
              to={lang + "/"}
              style={{
                color: `white`,
                textDecoration: `none`,
                fontSize: `16px`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <div className="header-links-container">
            <div
              style={{ display: this.state.menu ? "flex" : "none" }}
              className="header-mobile-links"
            >
              <HeaderLink
                style={{
                  fontWeight:
                    lastPath === "en" || lastPath === undefined ? `bold` : null,
                  padding: `15px 30px`,
                  textAlign: `center`,
                  opacity: `100%`,
                }}
                to={lang + "/"}
              >
                Top
              </HeaderLink>
              <HeaderLink
                style={{
                  fontWeight: lastPath === "about" ? `bold` : null,
                  padding: `15px 30px`,
                  textAlign: `center`,
                  opacity: `100%`,
                }}
                to={lang + "/about"}
              >
                About
              </HeaderLink>
              <HeaderLink
                style={{
                  fontWeight: lastPath === "services" ? `bold` : null,
                  padding: `15px 30px`,
                  textAlign: `center`,
                  opacity: `100%`,
                }}
                to={lang + "/services"}
              >
                Services
              </HeaderLink>
              <a
                href="https://get-off-the-rails.com"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  fontSize: `1rem`,
                  padding: `15px 30px`,
                  textAlign: `center`,
                  opacity: `100%`,
                }}
                target="_blank"
              >
                Blog{` `}
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{ fontSize: `14px` }}
                />
              </a>
              <HeaderLink
                style={{
                  fontWeight: lastPath === "contact" ? `bold` : null,
                  padding: `15px 30px`,
                  textAlign: `center`,
                  opacity: `100%`,
                }}
                to={lang + "/contact"}
              >
                Contact
              </HeaderLink>
            </div>
            <div className="header-page-links">
              <HeaderLink
                style={{
                  fontWeight:
                    lastPath === "en" || lastPath === undefined ? `bold` : null,
                }}
                to={lang + "/"}
              >
                Top
              </HeaderLink>
              <HeaderLink
                style={{
                  fontWeight: lastPath === "about" ? `bold` : null,
                }}
                to={lang + "/about"}
              >
                About
              </HeaderLink>
              <HeaderLink
                style={{
                  fontWeight: lastPath === "services" ? `bold` : null,
                }}
                to={lang + "/services"}
              >
                Services
              </HeaderLink>
              <a
                href="https://get-off-the-rails.com"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  fontSize: `1rem`,
                  padding: `5px 10px`,
                }}
                target="_blank"
              >
                Blog{` `}
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{ fontSize: `14px` }}
                />
              </a>
              <HeaderLink
                style={{
                  fontWeight: lastPath === "contact" ? `bold` : null,
                }}
                to={lang + "/contact"}
              >
                Contact
              </HeaderLink>
            </div>
            <div>
              <SelectLanguage langs={langs} current={currentLang} />
            </div>
            <div
              onClick={this.toggleDrawer("menu")}
              className="header-hamburger"
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{
                  fontSize: `24px`,
                  color: `white`,
                  marginLeft: `13px`,
                  display: this.state.menu ? "none" : "block",
                }}
              />
              <FontAwesomeIcon
                icon={faTimes}
                style={{
                  fontSize: `24px`,
                  color: `white`,
                  marginLeft: `13px`,
                  display: this.state.menu ? "block" : "none",
                }}
              />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
