import React from "react"
import { Layout } from "../components/Layout"
import { graphql } from "gatsby"
import { Blogs } from "../components/Blogs"

const Blog = () => {
  return (
    <>
      <h2>Blog Page</h2>
    </>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        content
        description
        date(formatString: "MMMM Do YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog
