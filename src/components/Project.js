import React from "react"
// import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaHome } from "react-icons/fa"

export const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
}) => {
  return (
    <article className="project">
      <Image className="project-img" fluid={image.childImageSharp.fluid} />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.tag}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaHome className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}
