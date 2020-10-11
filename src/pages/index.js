import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/layout"
import SiteHero from "../component/block/site-hero"
import WorksList from "../component/block/works-list"
import SEO from "../component/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />

      <SiteHero />

      <WorksList data={ data } />
      
    </Layout>
  )
}

export const query = graphql`
  {
    allMicrocmsWorks(sort: {fields: publishedAt, order: DESC}) {
      edges {
        node {
          title
          category
          isPrivate
          publishedAt
          thumbnail {
            url
          }
          id
        }
      }
    }
  }
`