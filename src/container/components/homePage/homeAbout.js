import React, { useState, useEffect } from "react"
// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
//Framer Motion
import { motion, useAnimation } from "framer-motion"
//Home Component
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionContent,
  AccordionIcon,
} from "../../styles/homeStyles"
//Context
import { useGlobalStateContext } from "../../context/globalContext"
//Scroll Observer
import { useInView } from "react-intersection-observer"

// Accordion Data
const accordionIds = [
  {
    id: 0,
    title: "Dashboard",
    results: [
      "Shopping cart",
      "Orders",
      "Products",
      "Your lists",
      "Balance",
    ],
  },
  {
    id: 1,
    title: "Settings",
    results: ["Profile", "Application permissions"],
  },
  {
    id: 2,
    title: "Your pantry",
    results: [
      "Bot",
    ],
  },
  {
    id: 3,
    title: "Stores",
    results: [
      "Maps",
    ],
  },
  {
    id: 4,
    title: "Help",
    results: [
      "Unique design and expertise",
      "Easy and secure payments",
      "Offers, discounts and promotions",
      "Virtual shops",
      "Search for items and shopping carts",
      "Weekly predictions & notifications",
      "Shipping and delivery, track your package",
      "Adjust your budget and optimize your spending",
      "Fill your pantry with the best products",
    ],
  },
  {
    id: 5,
    title: "User feedback",
    results: [
      "Report a bug",
      "Request a feature",
      "Send applause",
    ],
  },
  
  
]

const HomeAbout = ({ onCursor }) => {
  //Default state, using number for our id. Which ever the number/id is in the state. That will be opened.
  const [expanded, setExpanded] = useState(0)
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // Giving our scrollwheel additional 300px before executing animation
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Despensa App is an e-commerce that helps you find products from
              your nearest store, provides tools to manage your pantry, shopping
              list, secure payments and more.
            </h2>
            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling.
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  return (
    <>
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        whileHover={{
          color: !isOpen && currentTheme === "dark" ? "#ffffff" : "#000000",
        }}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
