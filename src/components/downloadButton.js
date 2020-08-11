import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link } from "gatsby"
import "../css/downloadButton.css"

const downloadButton = () => {
  return (
    <div>
      <Helmet>
        <script src={withPrefix("js/anime.min.js")} type="text/javascript" />
        <script src={withPrefix("js/segment.min.js")} type="text/javascript" />
        <script src={withPrefix("js/downloadButton.js")} type="text/javascript" />
      </Helmet>
      {/* <!-- Button container --> */}
      <div className="download-button-container">
        {/* <!-- The real button --> */}
        <button className="download-button">
          <span
            className="button-text-real hidden"
            style={{
              fontFamily: "MADE Evolve Sans Regular EVO",
              color: "#fff",
            }}
          >
            Download
          </span>
          {/* <!-- Extra elements to perform the animations --> */}
          <span className="button-icon"  style={{opacity: 1}}>
            <span className="button-linear-progress"  style={{opacity: 1}}>
              <span className="button-linear-progress-bar"  style={{opacity: 1}}></span>
            </span>
            <svg className="button-icon-svg" viewBox="0 0 60 60">
              <path
                className="button-icon-path button-icon-path-square"
                d="M 20 40 l 0 -20 l 20 0 l 0 20 Z"
              ></path>
              <path
                className="button-icon-path button-icon-path-line"
                d="M 40 20 l -20 20"
              ></path>
            </svg>
          </span>
        </button>
        {/* <!-- Extra elements to perform the animations --> */}
        <svg
          className="border-svg"
          width="240px"
          height="100px"
          viewBox="0 0 240 100"
        >
          <path
            className="border-path hidden"
            d="M 40 3.5 a 36.5 36.5 0 0 0 -36.5 36.5 a 36.5 36.5 0 0 0 36.5 36.5 C 70 76.5 90 76.5 120 76.5 S 170 76.5 200 76.5 a 36.5 36.5 0 0 0 36.5 -36.5 a 36.5 36.5 0 0 0 -36.5 -36.5 Z"
          ></path>
        </svg>
        <span
          className="button-text button-text-download"
          style={{
            fontFamily: "MADE Evolve Sans Regular EVO",
            color: "#fff",
          }}
        >
          Download CV
        </span>
        <span
          className="button-text button-text-done"
          style={{
            fontFamily: "MADE Evolve Sans Regular EVO",
            color: "#fff",
          }}
        >
          Done!
        </span>
        <div className="button-wave"></div>
        <div className="button-progress-container">
          <svg className="button-svg">
            <path
              className="button-circular-progress"
              d="M 50 50 m 0 -32.5 a 32.5 32.5 0 0 1 0 65 a 32.5 32.5 0 0 1 0 -65"
            ></path>
          </svg>
          <span className="button-ball"  style={{opacity: 1}}></span>
        </div>
      </div>
    </div>
  )
}

export default downloadButton
