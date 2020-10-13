import React from "react"
import { Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import "../css/neon.css"

const Experience = () => {
  const images = useStaticQuery(graphql`
    query {
      citelis: file(relativePath: { eq: "companies/citelis.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      di: file(relativePath: { eq: "companies/di.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      setenal: file(relativePath: { eq: "companies/setenal.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      espacioEmprendedor: file(
        relativePath: { eq: "companies/espacioEmprendedor.png" }
      ) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cave: file(relativePath: { eq: "companies/cave.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maristas: file(relativePath: { eq: "companies/maristas.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="12 Oct. 2020 - Present"
          iconStyle={{
            background: "#1f1f1f",
            alignItems: "center",
            display: "grid",
            color: "#fff",
          }}
          icon={
            <Img
              imgStyle={{ objectFit: "contain" }}
              style={{ maxHeight: "80%" }}
              fluid={images.citelis.childImageSharp.fluid}
            />
          }
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontFamily: "MADE Evolve Sans Bold" }}
          >
            Citelis - Organización de los Ramírez
          </h3>
          <Typography>
            <strong>Automotive Information Technology Specialist 💙.</strong>
          </Typography>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="16 Dec. 2019 - 15 Sep. 2020"
          iconStyle={{
            background: "#1f1f1f",
            alignItems: "center",
            display: "grid",
            color: "#fff",
          }}
          icon={
            <Img
              imgStyle={{ objectFit: "contain" }}
              style={{ maxHeight: "60%" }}
              fluid={images.di.childImageSharp.fluid}
            />
          }
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
            Multiple Development Projects.
          </h4>
          <Typography>
            Frontend Development, User Experience, Visual Design, SEO, Online
            Marketing.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan. 2020 - Jun. 2019"
          iconStyle={{
            background: "#1f1f1f",
            alignItems: "center",
            display: "grid",
            color: "#fff",
          }}
          icon={
            <Img
              imgStyle={{ objectFit: "contain" }}
              style={{ maxHeight: "80%" }}
              fluid={images.setenal.childImageSharp.fluid}
            />
          }
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
            Intelligent Tire Management System (SIAN).
          </h4>
          <Typography>
            Web Services (REST API) & Artificial Intelligence.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug. 2019 - Dec. 2020"
          iconStyle={{
            background: "#1f1f1f",
            alignItems: "center",
            display: "grid",
            color: "#fff",
          }}
          icon={
            <Img
              imgStyle={{ objectFit: "contain" }}
              style={{ maxHeight: "80%" }}
              fluid={images.espacioEmprendedor.childImageSharp.fluid}
            />
          }
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
            Internal Control Systems.
          </h4>
          <Typography>
            Automation, Data Analytics, User Experience, Planning and
            Organization.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug. 2019 - Dec. 2019"
          iconStyle={{
            background: "#1f1f1f",
            alignItems: "center",
            display: "grid",
            color: "#fff",
          }}
          icon={
            <Img
              imgStyle={{ objectFit: "contain" }}
              style={{ maxHeight: "80%" }}
              fluid={images.cave.childImageSharp.fluid}
            />
          }
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
            Agenda Cave.
          </h4>
          <Typography>
            Cross-Platform Mobile Application & Software Architecture.
          </Typography>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug. 2018 - Dec. 2018"
          iconStyle={{
            background: "#1f1f1f",
            alignItems: "center",
            display: "grid",
            color: "#fff",
          }}
          icon={
            <Img
              imgStyle={{ objectFit: "contain" }}
              style={{ maxHeight: "90%" }}
              fluid={images.maristas.childImageSharp.fluid}
            />
          }
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
            School Control System.
          </h4>
          <Typography>Secure software life cycle.</Typography>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
