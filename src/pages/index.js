import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../component/layout"
import SnsLinks from "../component/sns-links"
import CardItem from "../component/card-item"
import SEO from "../component/seo"
import styles from "./index.module.scss"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />

      <section className={styles.siteHero}>
        <div className={styles.siteHeroText}>
          <h2 className={styles.siteHeroHead}>爆速でSketchを駆るUIデザイナー</h2>
          <p className={styles.siteHeroSubhead}>
            運用性・拡張性の高いUIを最短で構築<br/>
            リリース後の運用・グロースまで並走します
          </p>
        </div>
        
        <Link className={styles.buttonAboutMe} to="/about-me/">青山広平</Link>
        <div className={styles.snsLinks}>
          <SnsLinks />
        </div>
      </section>

      <section className={styles.works}>
        <h3 className={styles.sectionHead}>Works</h3>
        <div className={styles.listWorks}>
          {data.allMicrocmsWorks.edges.map(({ node }, index) => (
            <CardItem key={index} workTitle={node.title} workCategory={node.category} thumbnail={node.thumbnail} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
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
        }
      }
    }
  }
`