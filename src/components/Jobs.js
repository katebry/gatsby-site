import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { Title } from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"

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
  const data = useStaticQuery(query)
  const [value, setValue] = useState(0)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const { company, position, date, description } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setValue(index)
                }}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}
