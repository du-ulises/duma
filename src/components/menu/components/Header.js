import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import Hamburger from "./Hamburger"
import "../../../css/menu.css"

const Header = () => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  })
  // State of our button
  const [disabled, setDisabled] = useState(true)

  // Toggle menu
  const handleMenu = () => {
    console.log("Handle menu")
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      })
    }
  }

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="menu">
              <button onClick={handleMenu}>
                <Typography>{state.menuName}</Typography>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </>
  )
}

export default Header
