/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 */

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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

const Layout = ({ location, children, handleChange }) => {
  const constraintsRef = useRef(null)
  const images = useStaticQuery(graphql`
    query {
      DeerDark: file(relativePath: { eq: "DeerDark.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DeerLight: file(relativePath: { eq: "DeerLight.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      isometric: file(relativePath: { eq: "isometric.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [environment, setEnvironment] = useState({ language: "EN" })
  const languages = ["EN", "|", "ES"]
  const handleChangueLanguage = language => {
    setEnvironment({ ...environment, language })
  }

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <GlobalStyle />
      </Body>

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
                  {/* <footer
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <motion.div
                      className="home container"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <AnimatePresence>
                        <Img
                          imgStyle={{ objectFit: "contain" }}
                          style={{ margin: "1rem", maxHeight: "50px" }}
                          fluid={images.DeerLight.childImageSharp.fluid}
                        />
                      </AnimatePresence>
                    </motion.div>
                    <Grid
                      container
                      alignItems="center"
                      justify="center"
                      spacing={1}
                    >
                      {languages.map(language => {
                        let spanClass =
                          environment.language === language ? "active" : ""
                        return (
                          <motion.li
                            key={language}
                            onClick={() => {
                              if (language !== "|") {
                                handleChangueLanguage(language)
                              }
                            }}
                            whileHover={{
                              scale: 1.2,
                              originX: 0,
                              color: "#1779ff",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span
                              className={spanClass}
                              style={{
                                color:
                                  environment.language === language
                                    ? "#4353ff"
                                    : "#fff",
                              }}
                            >
                              <Typography
                                style={{
                                  marginBottom: 5,
                                  color:
                                    environment.language === language
                                      ? "#4353ff"
                                      : "#fff",
                                  display: "inline",
                                }}
                              >
                                {language}
                              </Typography>
                            </span>
                          </motion.li>
                        )
                      })}
                    </Grid>
                  </footer> */}
                </div>
                <div className="banner">
                  <h1
                    id="text"
                    style={{
                      color: "#fff",
                    }}
                  >
                    DUMA
                  </h1>
                  <div className="copyright">
                    <Typography style={{ color: "#fff" }}>
                      © {new Date().getFullYear()}, By Diego Ulises Martínez
                      {/* {` `}
                      <a
                        href="https://www.gatsbyjs.org"
                        style={{
                          //color: "#1779ff",
                          color: "#fff",
                          textDecoration: "none",
                        }}
                      >
                        Diego Ulises Martínez
                      </a> */}
                    </Typography>
                  </div>
                  <div className="isometric">
                    <motion.div
                      className="home"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <AnimatePresence>
                        <Img
                          imgStyle={{ objectFit: "contain" }}
                          style={{ margin: "1rem", maxWidth: "800px" }}
                          fluid={images.isometric.childImageSharp.fluid}
                        />
                      </AnimatePresence>
                    </motion.div>
                  </div>
                  <Typography
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      zIndex: 2,
                      color: "#fff",
                    }}
                  >
                    #BoostYourBrand
                  </Typography>
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
