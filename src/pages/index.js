import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Typography, Grid } from "@material-ui/core"
import { Flex, Box } from "grid-styled"
import styled, { css } from "styled-components"
import { media } from "../utils/style"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import HeroText from "../components/heroText"
import SocialIcons from "../components/socialIcons"
import Tech from "../components/tech"
import Experience from "../components/experience"
import "../css/neon.css"
// import GitHubIcon from "@material-ui/icons/GitHub"
// import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import { Avatar, Tooltip, withStyles, Fade } from "@material-ui/core"
import scrollToElement from "scroll-to-element"
import ReactHowler from "react-howler"
import soundMp3 from "../audio/sound.mp3"

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

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const Title = styled.h1`
  font-family: "MADE Evolve Sans Medium EVO";
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: "Lato";
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Raleway";
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #292929;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #000;
        font-weight: 700;
      }
      h4 {
        color: #000;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const IndexPage = props => {
  const [sound, setSound] = useState(false)
  const images = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "bg/uli1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    let progress = document.getElementById("progressbar")
    let totalHeight = document.body.scrollHeight - window.innerHeight

    window.onscroll = function () {
      let progressHeight = (window.pageYOffset / totalHeight) * 100
      progress.style.height = progressHeight + "%"
    }
    const cursor = document.querySelector(".cursor")

    document.addEventListener("mousemove", e => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      )
    })

    document.addEventListener("click", () => {
      cursor.classList.add("expand")

      setTimeout(() => {
        cursor.classList.remove("expand")
      }, 500)
    })

    var Emblem = {
      init: function (el, str) {
        var element = document.querySelector(el)
        var text = str ? str : element.innerHTML
        element.innerHTML = ""
        for (var i = 0; i < text.length; i++) {
          var letter = text[i]
          var span = document.createElement("span")
          var node = document.createTextNode(letter)
          var r = (360 / text.length) * i
          var x = (Math.PI / text.length).toFixed(0) * i
          var y = (Math.PI / text.length).toFixed(0) * i
          span.appendChild(node)
          span.style.webkitTransform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)"
          span.style.transform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)"
          element.appendChild(span)
        }
      },
    }

    Emblem.init(".emblem")
  }, [])

  const changeSec = () => {
    var sec = document.getElementById("sec")
    try {
      sec.classList.toggle("active")
    } catch (error) {
      console.log(error)
    }
  }

  var content = (
    <Content>
      <HeroText text="" />
      <div
        style={{
          position: "absolute",
          margin: "0 0",
          left: 0,
          right: 0,
          bottom: -5,
        }}
      >
        <motion.div
          className="title"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <AnimatePresence>
            <Img
              style={{ maxHeight: "100%" }}
              fluid={images.me.childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
              className="uli"
            />
            <span className="slide"></span>
            <span className="slide2"></span>
          </AnimatePresence>
        </motion.div>
      </div>
      <div id="socialIcons">
        <SocialIcons
          style={{
            position: "absolute",
            margin: "0 auto",
            left: 0,
            right: 0,
            bottom: 16,
          }}
          icons={[
            {
              name: "LinkedInIcon",
              href: "www.linkedin.com/in/diegoulises",
              color: "#fff",
            },
            {
              name: "GitHubIcon",
              href: "https://github.com/Diego-Ulises",
              color: "#fff",
            },
            {
              name: "InstagramIcon",
              href: "https://www.instagram.com/diego.ulisess/",
              color: "#fff",
            },
          ]}
        />
      </div>

      <a id="about-me">About Me</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: "#fff",
            //color: "#d4af37",
          }}
        >
          About Me
        </Title>
        <div
          className="emblem"
          style={{
            fontFamily: "MADE Evolve Sans Regular EVO",
            color: "#fff",
          }}
        >
          Diego * Ulises * Martínez * Aguilar *
        </div>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={10} md={6}>
            <Typography style={{ color: "#fff", textAlign: "center" }}>
              My name is{" "}
              <div style={{ color: "#d4af37", display: "inline" }}>
                Diego Ulises Martínez Aguilar
              </div>
              , I'm a Frontend Web & Mobile Developer and UX / UI Designer,
              currently working in a digital development agency,{" "}
              <a
                href="https://digitalignition.com.mx/en/home/"
                target="_blank"
                style={{
                  color: "#d4af37",
                  fontFamily: "Acrom Medium",
                }}
              >
                Digital Ignition
              </a>
              , as Android Coordinator in Morelia, Mich. <br />
              <br />
              After more than 5 years as Computer Systems Engineering student I
              have discovered a passion for programming and development. <br />
              Since 2019 I've mostly been working on front-end web development
              and UX/UI Design.
            </Typography>
          </Grid>
          <Grid item xs={11} md={6}>
            <div class="about">
              <div class="card card2">
                <h2
                  style={{
                    fontFamily: "MADE Evolve Sans Bold EVO",
                  }}
                >
                  DUMA
                </h2>
                <i class="fas fa-arrow-right"></i>
                <p>Let's work together.</p>
                <div class="pic"></div>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div class="social">
                  <i class="fab fa-facebook-f">
                    <a
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
                    </a>
                  </i>
                  <i class="fab fa-twitter">
                    <a
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
                    </a>
                  </i>
                  <i class="fab fa-instagram">
                    <a
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
                    </a>
                  </i>
                  {/* <i class="fab fa-github">
                    <a href="https://github.com/Diego-Ulises" target="_blank">
                      <LightTooltip
                        title="Github"
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
                    </a>
                  </i> */}
                </div>
                <button></button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Section>
      <a id="work">Work</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: "#fff",
          }}
        >
          Work
        </Title>
        <Flex alignItems="center" flexDirection="column">
          <Link
            to="/work"
            id="neonButton"
            style={{ fontFamily: "MADE Evolve Sans Medium EVO" }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Study Cases
          </Link>
        </Flex>
      </Section>
      <a id="services">Services</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: "#fff",
          }}
        >
          Services
        </Title>
      </Section>
      <a id="experience">Experience</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: "#fff",
          }}
        >
          Experience
        </Title>
      </Section>
      <a id="tech">Tech</a>

      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: "#fff",
          }}
        >
          Tech
        </Title>
        <Tech />
      </Section>
      <a id="education">Education</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: "#fff",
          }}
        >
          Education
        </Title>
        <Experience />
      </Section>
      <a id="honoursAndAwards">Contact</a>
      <Section>
        <Title
          style={{
            fontFamily: "MADE Evolve Sans Medium EVO",
            fontSize: 24,
            color: "#fff",
          }}
        >
          Contact
        </Title>
        
      </Section>
    </Content>
  )
  return (
    <>
      <div className="cursor"></div>
      <a
        onClick={() => {
          scrollToElement("#about-me")
        }}
        onMouseEnter={() => {
          setSound(true)
        }}
        className="scroll-down"
      >
        <div className="mouse">
          <span></span>
        </div>
        <div className="arrow">
          <span></span>
        </div>
      </a>

      <ReactHowler
        src={[soundMp3]}
        playing={sound}
        onEnd={() => {
          setSound(false)
        }}
      />
      <Layout location={props.location}>
        <SEO title="Home" />
        <div id="progressbar"></div>
        <div id="scrollPath"></div>
        <NavBar
          main
          children={content.props.children}
          changeSec={() => {
            changeSec()
          }}
        />
        {content}
      </Layout>
    </>
  )
}

export default IndexPage
