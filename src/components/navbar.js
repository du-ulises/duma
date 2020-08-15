import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ReactHowler from "react-howler"
import { Typography } from "@material-ui/core"
import styled, { css } from "styled-components"
import { Flex, Box } from "grid-styled"
import scrollToElement from "scroll-to-element"
import { media } from "../utils/style"
import "../css/neon.css"
import blueMp3 from "../audio/Blue.mp3"
import soundMp3 from "../audio/sound.mp3"

const Base = styled.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  & ul > li a,
  & ul > li {
    height: 62px;
    font-size: 11px;
    float: right;
    position: relative;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: opacity .3s ease;
  }
  & ul > li a {
    
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: 32px;
  }

  ${props =>
    props.dark &&
    css`
      background: #000;
      & ul > li a,
      & ul > li {
        color: #242424;
        opacity: 0.6;
      }
      & ul > li a:hover {
        opacity: 1;
      }
      a {
        color: #000;
      }
    `}

  ${props =>
    props.main &&
    css`
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    `}

  ${media.xs`
    & ul {
      display: none;
    }
  `}
`

function NavBar(props) {
  const [playing, setPlaying] = useState(false)
  const [sound, setSound] = useState(false)
  const [environment, setEnvironment] = useState({ language: "EN" })
  const languages = ["EN", "|", "ES"]
  const handleChangueLanguage = language => {
    setEnvironment({ ...environment, language })
  }
  useEffect(() => {
    var marker = document.querySelector("#marker")
    var item = document.querySelectorAll("nav a")

    for (const link of item) {
      function indicator(e) {
        marker.style.left = e.offsetLeft + "px"
        marker.style.width = e.offsetWidth + "px"
      }
      /* Add click to currently iterated link node in NodeList result */
      link.addEventListener("mousemove", e => {
        indicator(e.target)
      })
    }

    setPlaying(window.screen.width < 700 ? false : true)
  }, [])

  return (
    <Base {...props}>
      <Flex>
        <Box px={2} width={[1 / 2, 1 / 6]}>
          <AnimatePresence>
            <motion.div
              className="title"
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <strong
                style={{
                  fontFamily: "MADE Evolve Sans Medium EVO",
                  fontSize: 24,
                  color: "#fff",
                }}
                id="duma-sound"
              >
                DUMA
              </strong>
            </motion.div>
          </AnimatePresence>
        </Box>
        <Box px={2} width={[0, 5 / 6]}>
          <motion.div
            className="title"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          >
            <nav>
              <div id="marker"></div>
              <a
                onClick={() => {
                  scrollToElement("#about-me")
                }}
                style={{
                  color: "#fff",
                }}
                onMouseEnter={() => {
                  setSound(true)
                }}
              >
                About Me
              </a>
              <a
                onClick={() => {
                  scrollToElement("#work")
                }}
                style={{
                  color: "#fff",
                }}
                onMouseEnter={() => {
                  setSound(true)
                }}
              >
                Work
              </a>
              <a
                onClick={() => {
                  scrollToElement("#services")
                }}
                style={{
                  color: "#fff",
                }}
                onMouseEnter={() => {
                  setSound(true)
                }}
              >
                Services
              </a>
              <a
                onClick={() => {
                  scrollToElement("#experience")
                }}
                style={{
                  color: "#fff",
                }}
                onMouseEnter={() => {
                  setSound(true)
                }}
              >
                Experience
              </a>
              <a
                onClick={() => {
                  scrollToElement("#tech")
                }}
                style={{
                  color: "#fff",
                }}
                onMouseEnter={() => {
                  setSound(true)
                }}
              >
                Tech
              </a>
              <a
                onClick={() => {
                  scrollToElement("#education")
                }}
                style={{
                  color: "#fff",
                }}
                onMouseEnter={() => {
                  setSound(true)
                }}
              >
                Education
              </a>
              <a
                onClick={() => {
                  scrollToElement("#contact")
                }}
                style={{
                  color: "#fff",
                }}
                onMouseEnter={() => {
                  setSound(true)
                }}
              >
                Contact
              </a>
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
                    onMouseEnter={() => {
                      setSound(true)
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
                            cursor: "pointer"
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
            </nav>
          </motion.div>
        </Box>
      </Flex>
      {/* <div className="bars">
        <label>
          <input type="checkbox" id="menu" onChange={props.changeSec} />
          <span className="toggle"></span>
        </label>
      </div> */}
      <div
        className="footer-sound-main"
        onClick={() => {
          setPlaying(!playing)
        }}
        onMouseEnter={() => {
          setSound(true)
        }}
      >
        <span id="bar-1" className={playing ? "sbar" : "sbar noAnim"}></span>
        <span id="bar-2" className={playing ? "sbar" : "sbar noAnim"}></span>
        <span id="bar-3" className={playing ? "sbar" : "sbar noAnim"}></span>
        <span id="bar-4" className={playing ? "sbar" : "sbar noAnim"}></span>
        <ReactHowler src={[blueMp3]} playing={playing} loop={true} />
        <ReactHowler
          src={[soundMp3]}
          playing={sound}
          onEnd={() => {
            setSound(false)
          }}
        />
      </div>
    </Base>
  )
}

export default NavBar
