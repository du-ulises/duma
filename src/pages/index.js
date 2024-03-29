import React, { Suspense, useEffect, useRef, useMemo, useState } from "react"
import { Canvas, Dom, useLoader, useFrame } from "react-three-fiber"
import { TextureLoader, LinearFilter } from "three"
import ReactHowler from "react-howler"
import lerp from "lerp"
import { Block, useBlock } from "../components/substance/blocks"
import { Text, MultilineText } from "../components/substance/components/Text"
import Diamonds from "../components/substance/diamonds/Diamonds"
import Plane from "../components/substance/components/Plane"
import state from "../components/substance/store"
import SEO from "../components/seo"
import "../css/neon.css"
import "../components/substance/styles.css"

import soundMp3 from "../audio/sound.mp3"

function Startup() {
  const ref = useRef()
  useFrame(
    () =>
      (ref.current.material.opacity = lerp(
        ref.current.material.opacity,
        0,
        0.025
      ))
  )
  return (
    <Plane
      ref={ref}
      color="#0e0e0f"
      position={[0, 0, 200]}
      scale={[100, 100, 1]}
    />
  )
}

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = !(index % 2)
  const color = index % 2 ? "#CFC5AD" : "#d9d9d9"
  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        <Plane
          map={image}
          args={[1, 1, 32, 32]}
          shift={200}
          size={size}
          aspect={aspect}
          scale={[w * size, (w * size) / aspect, 1]}
          frustumCulled={false}
        />
        <Dom
          style={{
            width: pixelWidth / (mobile ? 1 : 2),
            textAlign: left ? "left" : "right",
          }}
          position={[
            left || mobile ? (-w * size) / 2 : 0,
            (-w * size) / 2 / aspect - 0.4,
            1,
          ]}
        >
          {text}
        </Dom>
        <Text
          left={left}
          right={!left}
          size={w * 0.04}
          color={color}
          top
          position={[
            ((left ? -w : w) * size) / 2,
            (w * size) / aspect / 2 + 0.5,
            -1,
          ]}
        >
          {header}
        </Text>
        <Block factor={0.2}>
          <Text
            opacity={0.5}
            size={w * 0.1}
            color="#f0f0f0"
            position={[
              ((left ? w : -w) / 2) * size,
              (w * size) / aspect / 1.5,
              -10,
            ]}
          >
            {"0" + (index + 1)}
          </Text>
        </Block>
      </group>
    </Block>
  )
}

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [
    images,
  ])
  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text
            left
            size={w * 0.1}
            position={[-w / 3.2, 0.5, -1]}
            color="#CFC5AD"
          >
            MY WORK
          </Text>
        </Block>
        <Block factor={1.0}>
          <Dom position={[-w / 3.2, -w * 0.08 + 0.25, -1]}>
            + By Diego Ulises Martínez Aguilar
          </Dom>
        </Block>
      </Block>
      <Block factor={1.2} offset={5.7}>
        <MultilineText
          top
          left
          size={w * 0.1}
          lineHeight={w / 5}
          position={[-w / 3.5, 0, -1]}
          color="#FFF"
          text={"Let's\nwork\ntoge-\nther."}
        />
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane
            args={[50, height, 32, 32]}
            shift={-4}
            color={color}
            rotation={[0, 0, Math.PI / 8]}
            position={[0, 0, -10]}
          />
        </Block>
      ))}
      <Block factor={1.25} offset={14}>
        <Dom
          className="bottom-left"
          position={
            mobile
              ? [-canvasWidth / 4, -canvasHeight / 2, 0]
              : [-canvasWidth / 2, -canvasHeight / 2, 0]
          }
        >
          #Coding with <span role='img' aria-label={'love'} aria-labelledby={'love'}>🤍</span>.
        </Dom>
      </Block>
    </>
  )
}

function App() {
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)
  const [playing, setPlaying] = useState(false)
  const [sound, setSound] = useState(false)

  useEffect(() => {
    setPlaying(window.screen.width < 700 ? false : true)
    onScroll({ target: scrollArea.current })
  }, [])

  return (
    <div id="root">
      <SEO title="MY WORK" />
      <Canvas
        concurrent
        pixelRatio={1}
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          <Content />
          <Diamonds />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div
            key={index}
            id={"0" + index}
            style={{ height: `${(state.pages / state.sections) * 100}vh` }}
          />
        ))}
      </div>
      <div className="frame">
        <a
          className="frame__link"
          target="_blank"
          rel="noreferrer"
          href="https://duma.studio/"
          onMouseEnter={() => {
            if (playing) {
              setSound(true)
            }
          }}
          children="DUMA"
          style={{
            fontFamily: "MADE Evolve Sans Bold EVO",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          DUMA
        </a>
        <div className="frame__nav">
          <a
            className="frame__link"
            onMouseEnter={() => {
              if (playing) {
                setSound(true)
              }
            }}
            href="#00"
            children="00"
          />
          <a
            className="frame__link"
            onMouseEnter={() => {
              if (playing) {
                setSound(true)
              }
            }}
            href="#01"
            children="01"
          />
          <a
            className="frame__link"
            onMouseEnter={() => {
              if (playing) {
                setSound(true)
              }
            }}
            href="#02"
            children="02"
          />
          <a
            className="frame__link"
            onMouseEnter={() => {
              if (playing) {
                setSound(true)
              }
            }}
            href="#03"
            children="03"
          />
          <a
            className="frame__link"
            onMouseEnter={() => {
              if (playing) {
                setSound(true)
              }
            }}
            href="#04"
            children="04"
          />
          <a
            className="frame__link"
            onMouseEnter={() => {
              if (playing) {
                setSound(true)
              }
            }}
            href="#05"
            children="05"
          />
          <a
            className="frame__link"
            onMouseEnter={() => {
              if (playing) {
                setSound(true)
              }
            }}
            href="#013"
            children="...12"
          />
        </div>
      </div>
      <ReactHowler
        src={[soundMp3]}
        playing={sound}
        onEnd={() => {
          setSound(false)
        }}
      />
    </div>
  )
}

export default App
