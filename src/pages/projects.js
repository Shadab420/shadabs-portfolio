import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {
  return (
    <Layout>
      <Projects/>
    </Layout>
    
  )
}

export default ProjectsPage
