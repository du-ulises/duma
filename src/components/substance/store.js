import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8.5,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 2.0,
      header: "Agenda Cave.",
      image: "/substance/R1.jpg",
      aspect: 0.665,
      text:
        "Agenda Cave is a mobile application tailored for The Cave Barbershop so customers can schedule an appointment for any of the services they offer.",
    },
    {
      offset: 2,
      factor: 2.25,
      header: "CoWorker Platform.",
      image: "/substance/R2 COWORKER-02-01.jpg",
      aspect: 1.5037,
      text:
        "By Digital Ignition. Coworker Platform is a Business Management Systems in charge of automating the company's operational processes.",
    },
    {
      offset: 3,
      factor: 2.0,
      header: "Despensa App.",
      image: "/substance/R3 DESPENSA APP-01.jpg",
      aspect: 1.5,
      text:
        "Despensa App is an e-commerce that helps you find products from your nearest store, provides tools to manage your pantry, shopping list, secure payments and more.",
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Acamex.",
      image: "/substance/Acamex-01.jpg",
      aspect: 0.665,
      text:
        "By Digital Ignition. The Civil Association of Approved Certifiers in Mexico, ACAMEX for its initials in Spanish, is a results-oriented website of digital transformation strategies, provides a blog for ACAMEX members.",
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Travel App",
      image: "/substance/Travel-01.jpg",
      aspect: 1.55,
      text:
        "Travel App is a mobile application for travelers, it allows you to capture photos and share them with your friends, so you can also see reviews of other places, add comments and mark your favorites.",
    },
    {
      offset: 7,
      factor: 1.05,
      header: "Sistema de Control Escolar Maristas.",
      image: "/substance/Marista-01.jpg",
      aspect: 1.77,
      text: "School Control System for the Marist University, is a management system dedicated to provide a communication bridge between teachers, students and career coordinators.",
    },
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 },
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 },
  ],
  top: createRef(),
}

export default state
