import React from "react"
import { Typography, Grid, LinearProgress } from "@material-ui/core"

import "../css/neon.css"

const Services = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="baseline"
      spacing={2}
      className="itemServices"
    >
      <Grid item xs={12}>
        <h1 id="skillSet">SKILL SET</h1>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Typography>
          <h3 className="titleServices">SOLUTIONS</h3>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Web Applications
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>E-commerces
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>BMS Solutions
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Cross-Platform Mobile Aplications
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>PWA Solutions
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>SEO Positioning
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Machine Learning Prediction
          <span className="bullet">.</span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
          <h3 className="titleServices">STACK</h3>
        </Typography>
        <Typography>
          <span className="bullet">° </span>HTML, CSS, Javascript
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Responsive Design
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Frontend Frameworks & Libraries (React js, Angular, Vue js)
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          CSS Preprocessors
          <span className="bullet"> (basic).</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Package Managers (Yarn, npm)
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Progressive Web Applications
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Web Services (GraphQL, REST)
          <span className="bullet"> (basic).</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>D3
          <span className="bullet"> (basic).</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Redux
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          New Languages (Typescript, Dart)
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Backend Programming Lenguages
          <span className="bullet"> (basic).</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Databases
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Containers
          <span className="bullet"> (basic).</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Static Site Generators
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Agile SCRUM Methodology
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Software Architecture
          <span className="bullet">.</span>
        </Typography>

        <Typography>
          <h3 className="titleServices">INTERESTED IN</h3>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Server Side Rendering
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Browser Optimization Techniques (Caching, Lazy loading, etc.)
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>
          Testing (Unit, E2E, etc.)
          <span className="bullet">.</span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography>
          <h3 className="titleServices">FEATURES</h3>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Personality
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Adaptability
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Security
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Positioning
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Performance
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Results
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Payment methods
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Accessibility
          <span className="bullet">.</span>
        </Typography>
        <Typography>
          <span className="bullet">° </span>Scalability
          <span className="bullet">.</span>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Services
