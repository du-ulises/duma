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
            background: "#fff",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2011 - present"
          iconStyle={{ background: "#1f1f1f", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Digital Ignition
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
          iconStyle={{ background: "#1f1f1f", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            SETENAL
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
          iconStyle={{ background: "#1f1f1f", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Espacio Emprendedor
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
          iconStyle={{ background: "#1f1f1f", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            The Cave Barbershop
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
          iconStyle={{ background: "#1f1f1f", color: "#fff" }}
          icon={<AcUnitIcon />}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Universidad Marista Valladolid
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
          iconStyle={{ background: "#1f1f1f", color: "#fff" }}
          icon={<AcUnitIcon />}
        />
      </VerticalTimeline>
      {/* <div id="app" class="containerParallax">
        <card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
          <h1 slot="header">Digital Ignition</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </card>
        <card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
          <h1 slot="header">SETENAL</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </card>
        <card data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
          <h1 slot="header">Espacio Emprendedor</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </card>
        <card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
          <h1 slot="header">The Cave Barbershop</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </card>
        <card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
          <h1 slot="header">Universidad Marista Valladolid</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </card>
      </div>
     */}
    </div>
  )
}

export default Experience
