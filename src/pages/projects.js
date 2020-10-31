import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Projects } from "../components/Projects"
import { Footer } from "../components/Footer"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
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
        }
      }
    }
  }
`

export default ProjectsPage
