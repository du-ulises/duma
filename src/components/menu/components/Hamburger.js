import React, { useRef, useEffect, useState } from "react"
import { Typography, Grid } from "@material-ui/core"
import { gsap } from "gsap"
import ReactHowler from "react-howler"

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./Animations"
import scrollToElement from "scroll-to-element"

import soundMp3 from "../../../audio/sound.mp3"
import austin from "../images/austin.webp"
import newyork from "../images/newyork.webp"
import sanfrancisco from "../images/sanfrancisco.webp"
import beijing from "../images/beijing.webp"

const cities = [
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing },
]

const Hamburger = ({ state, go }) => {
  const [sound, setSound] = useState(false)
  // Create varibles of our dom nodes
  let menuLayer = useRef(null)
  let reveal1 = useRef(null)
  let reveal2 = useRef(null)
  let cityBackground = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let line4 = useRef(null)
  let line5 = useRef(null)
  let line6 = useRef(null)
  let line7 = useRef(null)
  // let info = useRef(null)

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1)
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } })
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      })
      staggerReveal(reveal1, reveal2)
      // fadeInUp(info)
      staggerText(line1, line2, line3, line4, line5, line6, line7)
    }
  }, [state])

  return (
    <div ref={el => (menuLayer = el)} className="hamburger-menu">
      <ReactHowler
        src={[soundMp3]}
        playing={sound}
        onEnd={() => {
          setSound(false)
        }}
      />
      <div
        ref={el => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={el => (reveal2 = el)} className="menu-layer">
        <div
          ref={el => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <Grid container>
                <Grid item xs={12}>
                  <nav>
                    <ul>
                      <li>
                        <a
                          style={{
                            fontFamily: "MADE Evolve Sans Bold EVO",
                          }}
                          onMouseEnter={e => {
                            handleHover(e)
                            setSound(true)
                          }}
                          onMouseOut={e => handleHoverExit(e)}
                          ref={el => (line1 = el)}
                          onClick={() => {
                            scrollToElement("#about-me")
                            go()
                          }}
                        >
                          About Me
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            fontFamily: "MADE Evolve Sans Bold EVO",
                          }}
                          onMouseEnter={e => handleHover(e)}
                          onMouseOut={e => {
                            handleHover(e)
                            setSound(true)
                          }}
                          ref={el => (line2 = el)}
                          onClick={() => {
                            scrollToElement("#work")
                            go()
                          }}
                        >
                          Work
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            fontFamily: "MADE Evolve Sans Bold EVO",
                          }}
                          onMouseEnter={e => handleHover(e)}
                          onMouseOut={e => {
                            handleHover(e)
                            setSound(true)
                          }}
                          ref={el => (line3 = el)}
                          onClick={() => {
                            scrollToElement("#services")
                            go()
                          }}
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            fontFamily: "MADE Evolve Sans Bold EVO",
                          }}
                          onMouseEnter={e => handleHover(e)}
                          onMouseOut={e => {
                            handleHover(e)
                            setSound(true)
                          }}
                          ref={el => (line4 = el)}
                          onClick={() => {
                            scrollToElement("#experience")
                            go()
                          }}
                        >
                          Experience
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            fontFamily: "MADE Evolve Sans Bold EVO",
                          }}
                          onMouseEnter={e => handleHover(e)}
                          onMouseOut={e => {
                            handleHover(e)
                            setSound(true)
                          }}
                          ref={el => (line5 = el)}
                          onClick={() => {
                            scrollToElement("#tech")
                            go()
                          }}
                        >
                          Tech
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            fontFamily: "MADE Evolve Sans Bold EVO",
                          }}
                          onMouseEnter={e => handleHover(e)}
                          onMouseOut={e => {
                            handleHover(e)
                            setSound(true)
                          }}
                          ref={el => (line6 = el)}
                          onClick={() => {
                            scrollToElement("#education")
                            go()
                          }}
                        >
                          Education
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            fontFamily: "MADE Evolve Sans Bold EVO",
                          }}
                          onMouseEnter={e => handleHover(e)}
                          onMouseOut={e => {
                            handleHover(e)
                            setSound(true)
                          }}
                          ref={el => (line7 = el)}
                          onClick={() => {
                            scrollToElement("#contact")
                            go()
                          }}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </Grid>
                {/* <Grid item xs={12} md={6}>
                  <div ref={el => (info = el)} className="info">
                    <Typography variant="h3">DUMA</Typography>
                    <Typography style={{ color: "#000" }}>
                      The passage experienced a surge in popularity during the
                      1960s when Letraset used it on their dry-transfer sheets,
                      and again during the 90s as desktop publishers bundled the
                      text with their software.
                    </Typography>
                  </div>
                </Grid> */}
              </Grid>
              <div className="locations">
                {/* Returning the list of cities */}
                <Grid container>
                  {cities.map(el => (
                    <Grid item xs={12}>
                      <span
                        key={el.name}
                        onMouseEnter={() =>
                          handleCity(el.image, cityBackground)
                        }
                        onMouseOut={() => handleCityReturn(cityBackground)}
                      >
                        <Typography style={{ display: "inline" }}>
                          {el.name}
                        </Typography>
                      </span>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
