import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"
import "../css/neon.css"
import "../css/slider.css"
import { Typography } from "@material-ui/core"

const Tech = () => {
  const images = useStaticQuery(graphql`
    query {
      flutter: file(relativePath: { eq: "dev/flutter.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dart: file(relativePath: { eq: "dev/dart.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      android: file(relativePath: { eq: "dev/android.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kotlin: file(relativePath: { eq: "dev/kotlin.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      react: file(relativePath: { eq: "dev/react.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redux: file(relativePath: { eq: "dev/redux.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gatsby: file(relativePath: { eq: "dev/gatsby.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ts: file(relativePath: { eq: "dev/ts.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      angular: file(relativePath: { eq: "dev/angular.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vue: file(relativePath: { eq: "dev/vue.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nuxt: file(relativePath: { eq: "dev/nuxt.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      js: file(relativePath: { eq: "dev/js.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      html: file(relativePath: { eq: "dev/html.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      css: file(relativePath: { eq: "dev/css.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sass: file(relativePath: { eq: "dev/sass.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      materialUi: file(relativePath: { eq: "dev/materialUi.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bootstrap: file(relativePath: { eq: "dev/bootstrap.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laravel: file(relativePath: { eq: "dev/laravel.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mysql: file(relativePath: { eq: "dev/mysql.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      python: file(relativePath: { eq: "dev/python.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mongodb: file(relativePath: { eq: "dev/mongodb.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      node: file(relativePath: { eq: "dev/node.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      firebase: file(relativePath: { eq: "dev/firebase.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      googleCloud: file(relativePath: { eq: "dev/google-cloud.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      npm: file(relativePath: { eq: "dev/npm.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paypal: file(relativePath: { eq: "dev/paypal.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stripe: file(relativePath: { eq: "dev/stripe.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      xd: file(relativePath: { eq: "dev/xd.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      illustrator: file(relativePath: { eq: "dev/illustrator.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      git: file(relativePath: { eq: "dev/git.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      docker: file(relativePath: { eq: "dev/docker.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vscode: file(relativePath: { eq: "dev/vscode.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nextjs: file(relativePath: { eq: "dev/nextjs.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yarn: file(relativePath: { eq: "dev/yarn.png" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  var settings = {
    dots: true,
    fade: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    centerPadding: "10px",
    swipeToSlide: true,
    focusOnSelect: false,
    className: "center",
    centerMode: true,
    rows: 3,
    slidesPerRow: 5,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesPerRow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesPerRow: 3,
        }
      }
    ]

  }
  return (
    <Slider {...settings}>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.flutter.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Flutter
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.dart.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Dart
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.android.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Android
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.nextjs.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Next Js
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.react.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          React
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.redux.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Redux
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.gatsby.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Gatsby
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.ts.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Typescript
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.angular.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Angular
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.vue.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Vue
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.nuxt.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Nuxt
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.js.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Javascript
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.html.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          HTML
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.css.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          CSS
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.sass.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Sass
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.kotlin.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Kotlin
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.materialUi.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Material UI
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.bootstrap.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Bootstrap
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.laravel.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Laravel
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.mysql.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          MySQL
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.mongodb.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Mongo DB
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.node.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Node Js
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.firebase.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Firebase
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.googleCloud.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Google Cloud Platform
        </Typography>
      </div>
      
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.illustrator.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Adobe Illustrator
        </Typography>
      </div>
      
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.paypal.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Paypal
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.stripe.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Stripe
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.xd.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Adobe Xd
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.yarn.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Yarn
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.npm.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon npm"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          npm
        </Typography>
      </div>


      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.git.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Git
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.docker.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          Docker
        </Typography>
      </div>
      <div className="dev-item">
        <Img
          style={{ maxHeight: "100%" }}
          fluid={images.vscode.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className="dev-icon"
        />
        <Typography
          style={{
            color: "#fff",
            fontFamily: "MADE Evolve Sans Regular EVO",
            marginBottom: 0,
            fontSize: "1rem",
          }}
        >
          VS Code
        </Typography>
      </div>
    </Slider>
  )
}

export default Tech
