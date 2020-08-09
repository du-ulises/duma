import React from "react"
import { Typography } from "@material-ui/core"
import AcUnitIcon from "@material-ui/icons/AcUnit"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import "../css/neon.css"

const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundImage: "'../images/mograph.gif'",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "#4353ff", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Creative Director
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ fontFamily: "MADE Evolve Sans Medium Evo" }}
          >
            Miami, FL
          </h4>
          <Typography>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "#4353ff", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Art Director
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ fontFamily: "MADE Evolve Sans Medium Evo" }}
          >
            San Francisco, CA
          </h4>
          <Typography>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "#4353ff", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Web Designer
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ fontFamily: "MADE Evolve Sans Medium Evo" }}
          >
            Los Angeles, CA
          </h4>
          <Typography>User Experience, Visual Design</Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "#4353ff", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Web Designer
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ fontFamily: "MADE Evolve Sans Medium Evo" }}
          >
            San Francisco, CA
          </h4>
          <Typography>User Experience, Visual Design</Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ fontFamily: "MADE Evolve Sans Medium Evo" }}
          >
            Online Course
          </h4>
          <Typography>Strategy, Social Media</Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Agile Development Scrum Master
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ fontFamily: "MADE Evolve Sans Medium Evo" }}
          >
            Certification
          </h4>
          <Typography>
            Creative Direction, User Experience, Visual Design
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ fontFamily: "MADE Evolve Sans Medium Evo" }}
          >
            Bachelor Degree
          </h4>
          <Typography>Creative Direction, Visual Design</Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<AcUnitIcon />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Experience
