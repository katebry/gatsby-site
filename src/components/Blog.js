import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

export const Blog = ({
  id,
  title,
  image,
  date,
  category,
  slug,
  description,
}) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}