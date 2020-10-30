import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import { Interests } from "../components/Interests"
import { Jobs } from "../components/Jobs"
import { Projects } from "../components/Projects"

const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <>
      <Layout>
        <Hero />
        <Jobs />
        <Projects projects={projects} title="Featured Projects" showLink />
        <Interests />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          tag
        }
      }
    }
  }
`

export default IndexPage
