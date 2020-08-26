import React from "react"
import PageLinks from "../constants/links"
import { RiPlantLine } from "react-icons/ri"
import { FaAlignRight } from "react-icons/fa"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <RiPlantLine />
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}
