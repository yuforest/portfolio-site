/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "typeface-noto-sans"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `)
  const url = location.pathname
  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, "/")
  const langsMenu = getLangs(
    langs,
    langKey,
    getUrlForLang(homeLink, url)
  ).map(item => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey}/`, "/"),
  }))


  return (
    <div style={{
      display: `flex`,
      flexFlow: `column`,
      justifyContent: `start`,
      minHeight: `100vh`
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} langs={langsMenu} url={url} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          width: `100%`,
          padding: `0 1.0875rem 1.45rem`,
          fontFamily: `Noto Sans`,
          flex: 1
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
