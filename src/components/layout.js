/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../styles/main.css"
import "../styles/layout.css"
import "../styles/button.css"

const Layout = ({ children, fetchDataCallback }) => {
  return (
    <div>
      <div class="wrapper">
        <main>{children}</main>
      </div>
      <button onClick={fetchDataCallback}>Fetch Data</button>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  fetchDataCallback: PropTypes.func,
}

export default Layout
