import React, { useEffect, useState } from "react"

import { Typography } from "@material-ui/core"

import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion"

import ProductImage from "../images/product-light.png"

//svgs
import { ReactComponent as Close } from "../images/close.svg"
import { ReactComponent as Chevron } from "../images/chevron.svg"
import { ReactComponent as DownArrow } from "../images/down-arrow.svg"

import "../css/product.css"

const Product = () => {
  const ease = [0.6, 0.05, -0.01, 0.99]
  let x = useSpring(0, { stiffness: 300, damping: 200, ease: ease })
  const fadeIn = useTransform(x, [-100, 0], [1, 0])
  const fadeOut = useTransform(x, [-60, 0], [0, 1])
  const scale = useTransform(x, [-100, 0], [1.25, 1])
  const width = useTransform(x, [-1060, 0], [350, 0])
  const up = useTransform(x, [-100, 0], [-100, 0])
  const down = useTransform(x, [-100, 0], [100, 0])

  //state
  const [state, setState] = useState(false)

  // Update the state to check if the user has dragged the product
  useEffect(() => {
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true)
    })
  }, [x])

  //Setting body scroll
  useEffect(() => {
    //scrolltargets
    let targetElement = document.querySelector("html")
    state
      ? targetElement.classList.add("no-scroll")
      : targetElement.classList.remove("no-scroll")
  }, [])

  // Closing the drag product
  const closeProductDrag = () => {
    x.stop()
    x.set(0)
  }
  return (
    <div className="product">
      <div className="product-inner">
        <div className="product-content">
          <motion.div
            style={{ translateY: up }}
            className="product-content-inner"
          >
            <h4
              style={{
                fontFamily: "MADE Evolve Sans Regular",
                color: "#1779ff",
              }}
            >
              WE ARE DIGITAL IGNITION, OUR MISSION:
            </h4>
            <h2>BOOST YOUR BRAND</h2>
            <h4
              style={{
                fontFamily: "MADE Evolve Sans Regular",
                color: "#1779ff",
              }}
            >
              WE ARE FUN PEOPLE THAT MAKES SERIOUS STUFF
            </h4>
          </motion.div>
        </div>
      </div>
      <div className="product-slide-enlarge">
        <motion.div
          className="background"
          style={{ opacity: fadeIn }}
        ></motion.div>
        {state ? (
          <AnimatePresence>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ ease: ease }}
              className="product-drag-header"
            >
              <div onClick={closeProductDrag} className="close">
                {/* <Close /> */}
                <Typography>Close</Typography>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence></AnimatePresence>
        )}
        <div className="product-container">
          <motion.div
            drag="x"
            style={{ x, scale }}
            dragElastic={0.05}
            dragConstraints={{ left: -1060, right: 0 }}
            className="product-image"
          >
            <img src={ProductImage} alt="product" id="image-p" />
          </motion.div>
        </div>
        <motion.div style={{ paddingBottom: down }} className="product-drag">
          <div className="product-drag-inner">
            <div className="product-drag-label">
              <motion.h6 style={{ x, opacity: fadeOut }}>
                {/* <Chevron /> */}
                <Typography>Drag To Enlarge</Typography>
              </motion.h6>
            </div>
            <div className="product-drag-progress-background">
              <motion.div
                style={{ width }}
                className="product-drag-progress"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* <div className="background"></div>
        <div className="product-drag-header">
          <div className="company-name">DUMA</div>
          <div className="close">Close</div>
        </div>
        <div className="product-container">
          <motion.div
            drag={"x"}
            dragConstraints={{ left: -940, right: 0 }}
            dragElastic={0.05}
            className="product-image"
          >
            <img src={ProductImage} alt="product" id="image-p" />
          </motion.div>
        </div>
        <div className="product-drag">
          <div className="product-drag-inner">
            <div className="product-drag-label">
              <Typography>
                Drag to show full image
              </Typography>
            </div>
            <div className="product-drag-progress-background">
              <div className="product-drag-progress"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Product
