import React from "react"
import interests from "../constants/interests"
import { Title } from "./Title"

export const Interests = () => {
  return (
    <section className="section bg-grey">
      <Title title="Interests" />
      <div className="section-center services-center">
        {interests.map(interest => {
          const { id, icon, title, text } = interest

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
