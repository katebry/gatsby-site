import React from "react"
import { grapql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs {
      nodes {
        company
        date
        position
        description {
          id
          name
        }
      }
    }
  }
`

export const Jobs = () => {
  return (
    <>
      <h1> Jobs</h1>
    </>
  )
}
