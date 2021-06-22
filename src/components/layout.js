/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 */

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

import "../fonts/fonts.css"
import "../css/neon.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#01579b",
      main: "#01579b",
      dark: "#880e4f",
    },
    secondary: {
      light: "#2196f3",
      main: "#2196f3",
      dark: "#2196f3",
    },
    type: "dark",
    background: {
      default: "#101010",
    },
  },
  typography: {
    fontFamily: [
      "Acrom Medium",
      "MADE Evolve Sans Bold EVO",
      "MADE Evolve Sans Light EVO",
      "MADE Evolve Sans Medium EVO",
      "MADE Evolve Sans Regular EVO",
      "MADE Evolve Sans Thin EVO",
      "Acrom Light",
    ].join(","),
  },
})

const GlobalStyle = createGlobalStyle`
  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  img {
    margin-bottom: 0;
  }
`

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
}

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ location, children }) => {

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <motion.main
          key={location?.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {location &&
            (location?.pathname !== "/404" ||
              location?.pathname !== "/comming-soon") && (
              <>
                <div
                  style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                  }}
                >
                  <main>{children}</main>
                </div>
              </>
            )}
        </motion.main>
      </AnimatePresence>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
