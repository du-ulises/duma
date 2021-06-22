import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroText from "../components/heroText"
import { useTheme } from "@material-ui/core/styles"
import "../css/neon.css"

const NotFoundPage = props => {
  const theme = useTheme()
  var windowWidth = 0
  var breakpointWidth = theme.breakpoints.values.md
  var isSmallScreen = false

  useEffect(() => {
    windowWidth = window.innerWidth
    isSmallScreen = windowWidth < breakpointWidth
  }, [])

  return (
    <Layout
      location={props.location}
    >
      <SEO title="Page Not found" />
      <Link
        to="/"
        id="neonButton"
        style={{
          fontFamily: "MADE Evolve Sans Medium EVO",
          position: "absolute",
          bottom: isSmallScreen ? "25%" : "35%",
          left: "20%",
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Return To Home Page
      </Link>
      <HeroText text="404 Page Not Found" />
    </Layout>
  )
}

export default NotFoundPage
