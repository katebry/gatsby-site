import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1 className="h1-name">Kate Bryan</h1>
            <h4>Software developer</h4>
            <Link to="/about" className="btn">
              About me
            </Link>
            <div className="social-links-container">
              <SocialLinks />
            </div>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}
