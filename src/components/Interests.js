import React from "react"
import services from "../constants/services"
import { Title } from "./Title"

export const Interests = () => {
  return (
    <section className="section bg-grey">
      <Title title="Interests" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text } = service

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
