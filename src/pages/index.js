import React from "react"
import Layout from "../components/Layout"
import { Hero } from "../components/Hero"
import { Services } from "../components/Services"
import { Jobs } from "../components/Jobs"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Services />
        <Jobs />
      </Layout>
    </>
  )
}

export default IndexPage
