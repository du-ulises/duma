import React from "react"
import styled from "styled-components"
import { a } from "react-spring"
import InfiniteSlider from "../../gallery/slider"
import items from "../../gallery/items"
import "../../gallery/styles.css"
const Main = styled.div`
  margin-top: 2rem;
  height: 540px;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 100px;
`

const Marker = styled.span`
  color: white;
  position: absolute;
  top: 0px;
  left: 140px;
  font-family: monospace;
`

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 12px;
  box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);
  border: 1px solid #1779ff88;
`
const Ret = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: #1779ff44;
  margin-top: 2rem;
`

const Gallery = () => {
  return (
    <Ret>
      <Main>
        <InfiniteSlider items={items} visible={3}>
          {({ css }, i) => (
            <Content>
              <Marker>{String(i).padStart(2, "0")}</Marker>
              <Image style={{ backgroundImage: css }} />
            </Content>
          )}
        </InfiniteSlider>
      </Main>
    </Ret>
  )
}

export default Gallery
