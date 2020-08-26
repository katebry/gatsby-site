import React from "react"
// import PageLinks from "../constants/links"
// import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div classname="nav-header">
          {/* <img src={logo} alt="logo" /> */}
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        {/* <PageLinks styleClass="nav-links"></PageLinks> */}
      </div>
    </nav>
  )
}
