import React from "react"
import styled from "styled-components"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Avatar, Tooltip, withStyles, Fade } from "@material-ui/core"

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

const Icon = ({ name, href, colorx }) => (
  <a href={href} target="_blank">
    {name === "GitHubIcon" ? (
      <LightTooltip title="GitHub" placement="top" TransitionComponent={Fade}>
        <Avatar style={{ color: colorx, backgroundColor: "transparent" }}>
          <GitHubIcon fontSize="small" />
        </Avatar>
      </LightTooltip>
    ) : name === "LinkedInIcon" ? (
      <LightTooltip
        title="LinkedIn"
        placement="left"
        TransitionComponent={Fade}
      >
        <Avatar
          style={{
            color: colorx,
            backgroundColor: "transparent",
          }}
        >
          <LinkedInIcon fontSize="small" />
        </Avatar>
      </LightTooltip>
    ) : (
      <LightTooltip
        title="Instagram"
        placement="right"
        TransitionComponent={Fade}
      >
        <Avatar style={{ color: colorx, backgroundColor: "transparent" }}>
          <InstagramIcon fontSize="small" />
        </Avatar>
      </LightTooltip>
    )}
  </a>
)

const Base = styled.div`
  z-index: 4;
  margin: 20px 0;
  text-align: center;
  & a {
    display: inline-block;
    margin 5px;
    color: #000000;
  }
  & a span {
    transition: color .2s ease-in;
  }
  & a:hover {
    text-decoration: none;
  }
  & a:hover span.fa-linkedin {
    color: #4875b4;
  }
  & a:hover span.fa-twitter {
    color: #3cf;
  }
  & a:hover span.fa-github-alt {
    color: #fc6d26;
  }
`

class SocialIcons extends React.Component {
  render() {
    const icons = this.props.icons.map(function (icon) {
      return (
        <Icon
          key={icon.name}
          name={icon.name}
          href={icon.href}
          colorx={icon.color}
        />
      )
    })
    return <Base {...this.props}>{icons}</Base>
  }
}

export default SocialIcons
