import React, { useRef, useEffect } from "react"
import { Typography, Grid } from "@material-ui/core"
import { Flex } from "grid-styled"

import "../css/neon.css"
import "../css/contact.css"

import {
  handleCityContactReturn,
  handleCityContact,
} from "./menu/components/Animations"

import CV from "../resources/CV-ISIC-MARTINEZ-AGUILAR-DIEGO-ULISES.pdf"
import S1 from "./menu/images/series1.jpg"
import S2 from "./menu/images/series2.jpg"
import S3 from "./menu/images/series3.jpg"
import S4 from "./menu/images/series4.jpg"

import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import { Avatar, Tooltip, withStyles, Fade } from "@material-ui/core"

import { OutboundLink } from "gatsby-plugin-google-analytics"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#1779ff",
    color: "#fff",
    boxShadow: "0 0 10px #1779ff, 0 0 20px #1779ff, 0 0 40px #1779ff",
    fontSize: 14,
    fontFamily: "MADE Evolve Sans Medium EVO",
    letterSpacing: 2,
  },
}))(Tooltip)

const cities = [
  { name: "North", image: S1 },
  { name: "South", image: S3 },
  { name: "East", image: S4 },
  { name: "West", image: S2 },
]

const Experience = () => {
  let reveal2 = useRef(null)
  let cityBackground = useRef(null)

  useEffect(() => {}, [])
  return (
    <div>
      <Grid
        container
        justify="center"
        style={{ zIndex: 2, marginTop: "-4rem" }}
      >
        <Grid item></Grid>
      </Grid>
      <div ref={el => (reveal2 = el)} className="menu-layer-contact">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="contentContact"
          ref={el => (cityBackground = el)}
        >
          <Grid item xs={10} md={6}>
            <div className="squareSmall">
              <Flex
                alignItems="center"
                flexDirection="column"
                style={{ position: "relative" }}
              >
                <OutboundLink
                  href={CV}
                  download
                  id="neonButton"
                  target="_blank"
                >
                  <Typography
                    style={{
                      color: "#fff",
                      fontFamily: "MADE Evolve Sans Bold EVO",
                      zIndex: 2,
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Download CV
                  </Typography>
                </OutboundLink>
              </Flex>

              <h1
                style={{
                  fontFamily: "MADE Evolve Sans Bold",
                  color: "#fff",
                  fontSize: "2.5rem",
                  marginTop: "2rem",
                }}
              >
                Thank you for your interest!
              </h1>
              <Typography
                style={{
                  color: "#fff",
                }}
              >
                Original background music "Blue" & "Tides of time" by{" "}
                <OutboundLink
                  href="https://nickpashkov.com/"
                  style={{
                    color: "#1779ff",
                    fontFamily: "MADE Evolve Sans Medium",
                    display: "inline",
                  }}
                  target="_blank"
                >
                  Nikita Pashkov
                </OutboundLink>
              </Typography>
              <Typography
                style={{
                  color: "#a3a3a3",
                  marginTop: "2rem",
                }}
              >
                FOLLOW ME.
              </Typography>
              <div className="follow">
                <OutboundLink
                  href="www.linkedin.com/in/diegoulises"
                  target="_blank"
                >
                  <LightTooltip
                    title="LinkedIn"
                    placement="bottom"
                    TransitionComponent={Fade}
                  >
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: "transparent",
                      }}
                    >
                      <LinkedInIcon fontSize="small" />
                    </Avatar>
                  </LightTooltip>
                </OutboundLink>

                <OutboundLink
                  href="https://github.com/Diego-Ulises"
                  target="_blank"
                >
                  <LightTooltip
                    title="GitHub"
                    placement="bottom"
                    TransitionComponent={Fade}
                  >
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: "transparent",
                      }}
                    >
                      <GitHubIcon fontSize="small" />
                    </Avatar>
                  </LightTooltip>
                </OutboundLink>
                <OutboundLink
                  href="https://www.facebook.com/diegoulises.martinezaguilar.1"
                  target="_blank"
                >
                  <LightTooltip
                    title="Facebook"
                    placement="bottom"
                    TransitionComponent={Fade}
                  >
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: "transparent",
                      }}
                    >
                      <FacebookIcon fontSize="small" />
                    </Avatar>
                  </LightTooltip>
                </OutboundLink>
                <OutboundLink
                  href="https://twitter.com/DiegoUlisesMtz"
                  target="_blank"
                >
                  <LightTooltip
                    title="Twitter"
                    placement="bottom"
                    TransitionComponent={Fade}
                  >
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: "transparent",
                      }}
                    >
                      <TwitterIcon fontSize="small" />
                    </Avatar>
                  </LightTooltip>
                </OutboundLink>
                <OutboundLink
                  href="https://www.instagram.com/diego.ulisess/"
                  target="_blank"
                >
                  <LightTooltip
                    title="Instagram"
                    placement="bottom"
                    TransitionComponent={Fade}
                  >
                    <Avatar
                      style={{
                        color: "#fff",
                        backgroundColor: "transparent",
                      }}
                    >
                      <InstagramIcon fontSize="small" />
                    </Avatar>
                  </LightTooltip>
                </OutboundLink>
              </div>

              <Typography
                style={{
                  color: "#a3a3a3",
                }}
              >
                COOKIES POLICY.
              </Typography>
              <Typography
                style={{
                  color: "#fff",
                }}
              >
                As is common practice with almost all professional websites this
                site uses cookies, which are a small removable data file that is
                stored in your web browser on your computer, to improve your
                experience.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={11} md={5}>
            <div className="squareBig">
              <div className="triangle">
                <div id="triangle-topright"></div>
              </div>
              <Typography
                variant='h5'
                style={{
                  color: "#fff",
                }}
              >
                GET IN TOUCH.
              </Typography>
              <h1
                style={{
                  fontFamily: "MADE Evolve Sans Bold",
                  color: "#fff",
                  fontSize: "2.5rem",
                }}
              >
                Let's talk!
              </h1>
              <Typography
                style={{
                  color: "#fff",
                }}
              >
                I’d love to know what you're pushing towards. Reach out with
                whatever you've got.
              </Typography>

              <Typography
                variant='h5'
                style={{
                  color: "#a3a3a3",
                  marginTop: "0.5rem"
                }}
              >
                CALL.
              </Typography>
              <a href="tel:+524381093584">
                <Typography className="infoText">
                  <WhatsAppIcon style={{ marginRight: "0.5rem" }} /> +52 (438)
                  109 35 84
                </Typography>
              </a>
              <Typography
                variant='h5'
                style={{
                  color: "#a3a3a3",
                  marginTop: "0.5rem"
                }}
              >
                SUBMIT.
              </Typography>
              <a href="mailto:du.ulises@gmail.com">
                <Typography className="infoText">
                  <MailOutlineIcon style={{ marginRight: "0.5rem" }} />{" "}
                  du.ulises@gmail.com
                </Typography>
              </a>
              <Typography
                variant='h5'
                style={{
                  color: "#a3a3a3",
                  marginTop: "0.5rem"
                }}
              >
                VISIT.
              </Typography>
              <a href="https://www.google.com.mx/maps/place/Morelia,+Michoac%C3%A1n/@19.7038033,-101.2761649,12z/data=!3m1!4b1!4m5!3m4!1s0x842d0ba2b29da7e3:0x4016978679c8620!8m2!3d19.7059504!4d-101.1949825?hl=en&authuser=0">
                <Typography className="infoText">
                  <LocationOnIcon style={{ marginRight: "0.5rem" }} /> Morelia,
                  Michoacán, México.
                </Typography>
              </a>

              <div className="triangle">
                <div id="triangle-bottomright"></div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}></Grid>

          <div className="locations">
            {/* Returning the list of cities */}
            <Grid container>
              {cities.map(el => (
                <Grid item xs={3}>
                  <span
                    key={el.name}
                    onMouseEnter={() =>
                      handleCityContact(el.image, cityBackground)
                    }
                    onMouseOut={() => handleCityContactReturn(cityBackground)}
                  >
                    <Typography style={{ display: "inline" }}>
                      {el.name}
                    </Typography>
                  </span>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default Experience
