import React from "react"
import Layout from "../container/components/layout"
import SEO from "../components/seo"

//Components
import HomeContent from "../container/components/homePage/HomeContent"
import HomeFeatured from "../container/components/homePage/HomeFeatured"
import HomeAbout from "../container/components/homePage/HomeAbout"
import HomeBanner from "../container/components/homePage/HomeBanner"
import Gallery from "../container/components/homePage/Gallery"
//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../container/context/globalContext"


const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <Layout>
      <SEO title="Despensa App." />
      {console.log("props", props)}
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
      <Gallery />
    </Layout>
  )
}

export default IndexPage
