import React from "react"
import styled from "styled-components"
import Typist from "react-typist"

import { media } from "../utils/style"

const StyledTypist = styled(Typist)`
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 48px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  position: absolute;
  top: 45%;
  left: 50%;
  ${media.md`
  left: 25%;
  top: 40%;
`}
  ${media.xs`
  left: 3%;
  top: 15%;
  letter-spacing: 12px;
  z-index: 2;
  font-size: 44px;
`}
`
const Base = styled.div`
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 48px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  position: absolute;
  top: 45%;
  left: 50%;
  ${media.md`
left: 25%;
top: 40%;
`}
  ${media.xs`
left: 3%;
top: 15%;
letter-spacing: 12px;
z-index: 2;
font-size: 44px;
`}
`
const StyledTypist2 = styled(Typist)`
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 48px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  margin-top: 10%;
  text-align: center;
  ${media.md`
`}
  ${media.xs`
  letter-spacing: 12px;
  z-index: 2;
  font-size: 44px;
`}
`
const Base2 = styled.div`
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 48px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  margin-top: 10%;
  text-align: center;
  ${media.md`
`}
  ${media.xs`
letter-spacing: 12px;
z-index: 2;
font-size: 44px;
`}
`

const HeroText = ({ text }) => {
  const [done, setDone] = React.useState(false)
  if (text === "COMMING SOON... Under Construction.") {
    if (!done) {
      return (
        <StyledTypist2
          cursor={{ show: false }}
          onTypingDone={() => {
            setDone(true)
          }}
        >
          <span
            style={{
              color: "#fff",
              fontSize: 28,
              fontFamily: "MADE Evolve Sans Light EVO",
            }}
          >
            {text.split(" ").slice(2).join(" ")}
          </span>
          <strong
            style={{
              fontFamily: "MADE Evolve Sans Bold EVO",
              color: "#fff",
              display: "block",
              fontSize: 38,
            }}
          >
            {text.split(" ").slice(0, 2).join(" ")}
            <br />
          </strong>
        </StyledTypist2>
      )
    } else {
      return (
        <Base2>
          <span
            style={{
              color: "#fff",
              fontSize: 28,
              fontFamily: "MADE Evolve Sans Light EVO",
            }}
          >
            Under Construction.
          </span>
          <strong
            style={{
              fontFamily: "MADE Evolve Sans Bold EVO",
              color: "#fff",
              display: "block",
              fontSize: 38,
            }}
          >
            COMMING SOON...
          </strong>
        </Base2>
      )
    }
  }
  if (text !== "") {
    if (!done) {
      return (
        <StyledTypist
          cursor={{ show: false }}
          onTypingDone={() => {
            setDone(true)
          }}
        >
          <strong
            style={{
              fontFamily: "MADE Evolve Sans Bold EVO",
              color: "#fff",
            }}
          >
            {text.split(" ").slice(0, 1)}
            <br />
          </strong>
          <span
            style={{
              fontFamily: "Acrom Light",
              color: "#fff",
            }}
          >
            {text.split(" ").slice(1).join(" ")}
          </span>
        </StyledTypist>
      )
    } else {
      return (
        <Base>
          <strong
            style={{
              fontFamily: "MADE Evolve Sans Bold EVO",
              color: "#fff",
              display: "block",
            }}
          >
            404
          </strong>{" "}
          <span
            style={{
              fontFamily: "Acrom Light",
              color: "#fff",
            }}
          >
            Page Not Found
          </span>
        </Base>
      )
    }
  }
  if (!done) {
    return (
      <StyledTypist
        cursor={{ show: false }}
        onTypingDone={() => {
          setDone(true)
        }}
      >
        <strong
          style={{
            fontFamily: "MADE Evolve Sans Bold EVO",
            color: "#fff",
          }}
        >
          I Make
        </strong>{" "}
        <span style={{ fontFamily: "Acrom Light", color: "#fff" }}>
          Websites
        </span>
        <Typist.Backspace count={9} delay={300} />
        <span style={{ fontFamily: "Acrom Light", color: "#fff" }}>
          {" "}
          Web Apps
        </span>
        <Typist.Backspace count={9} delay={300} />
        <span style={{ fontFamily: "Acrom Light", color: "#fff" }}>
          {" "}
          Mobile Apps
        </span>
        <Typist.Backspace count={12} delay={300} />
        <span style={{ fontFamily: "Acrom Light", color: "#fff" }}>
          {" "}
          Software Engineer
        </span>
        <Typist.Delay ms={100} />
        <span style={{ fontFamily: "Acrom Light", color: "#fff" }}>.</span>
        <Typist.Delay ms={200} />
        <span style={{ fontFamily: "Acrom Light", color: "#fff" }}>.</span>
        <Typist.Delay ms={300} />
        <span style={{ fontFamily: "Acrom Light", color: "#fff" }}>.</span>
        <Typist.Backspace count={29} delay={10} />
        <strong
          style={{
            fontFamily: "MADE Evolve Sans Bold EVO",
            color: "#fff",
          }}
        >
          But Mostly Just
        </strong>{" "}
        <span style={{ fontFamily: "Acrom Light", color: "#fff" }}>
          Cool Web Stuff
        </span>
      </StyledTypist>
    )
  } else {
    return (
      <Base>
        <strong
          style={{
            fontFamily: "MADE Evolve Sans Bold EVO",
            color: "#fff",
          }}
        >
          But Mostly Just
        </strong>{" "}
        <span style={{ fontFamily: "Acrom Light", color: "#fff" }}>
          Cool Web Stuff
        </span>
      </Base>
    )
  }
}

export default HeroText
