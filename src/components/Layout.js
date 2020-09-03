import React from "react"
import { Navbar } from "./Navbar"
// import { Sidebar } from "./Sidebar"
// import { Footer } from "./Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
