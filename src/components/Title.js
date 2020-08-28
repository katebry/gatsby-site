import React from "react"

export const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "default"}</h2>
      <div className="underline"></div>
    </div>
  )
}
