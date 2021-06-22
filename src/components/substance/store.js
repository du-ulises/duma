import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 15,
  pages: 14.5,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 2.0,
      header: "Agenda Cave.",
      image: "/substance/R1.jpg",
      aspect: 0.665,
      text: ""
    },
    {
      offset: 2,
      factor: 2.25,
      header: "CoWorker Platform.",
      image: "/substance/R2 COWORKER-02-01.jpg",
      aspect: 1.5037,
      text: "By Digital Ignition."
    },
    {
      offset: 3,
      factor: 2.0,
      header: "Despensa App.",
      image: "/substance/R3 DESPENSA APP-01.jpg",
      aspect: 1.5,
      text: ""
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Acamex.",
      image: "/substance/Acamex-01.jpg",
      aspect: 0.665,
      text: "By Digital Ignition."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Travel App",
      image: "/substance/Travel-01.jpg",
      aspect: 1.55,
      text: ""
    },
    {
      offset: 7,
      factor: 1.05,
      header: "Sistema de Control Escolar Maristas.",
      image: "/substance/Marista-01.jpg",
      aspect: 1.77,
      text: ""
    },
    {
      offset: 8,
      factor: 2.0,
      header: "Technical Laboratory.",
      image: "/substance/Technical Laboratory.png",
      aspect: 0.665,
      text:
        ""
    },
    {
      offset: 9,
      factor: 2.0,
      header: "Hollister Auto.",
      image: "/substance/Hollister.png",
      aspect: 0.665,
      text:
        ""
    },
    {
      offset: 10,
      factor: 2.0,
      header: "eBook.",
      image: "/substance/Ebook.png",
      aspect: 0.665,
      text:
        ""
    },
    {
      offset: 11,
      factor: 2.25,
      header: "Bloom Cycling.",
      image: "/substance/Bloom Cycling.png",
      aspect: 1.5037,
      text: "By Digital Ignition."
    },
    {
      offset: 12,
      factor: 2.25,
      header: "eCert.",
      image: "/substance/ECERT.png",
      aspect: 1.5037,
      text: "By Digital Ignition."
    },
    {
      offset: 13,
      factor: 2.25,
      header: "Wiximo Social CRM.",
      image: "/substance/wiximo.png",
      aspect: 1.5037,
      text: "By Citelis Technology."
    },
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 },
    { offset: 9.2, color: "#000", height: 5 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 9, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 10, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: 0, offset: 11, pos: new Vector3(), scale: 1.5, factor: 6 },
    { x: 2, offset: 12, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 14, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
