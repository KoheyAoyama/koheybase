import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../component/layout"
import SnsLinks from "../component/sns-links"
import SEO from "../component/seo"
import styles from "./index.module.scss"


const CardWork = props => {
  return (
  <article
    css={css`
      width: 100%;
      height: 240px;
    `}
  >
    <Link to="/">
      <img
        css={css`
          margin-bottom: 8px;
          padding-top: 75%;
          background: rgba(0,0,0,.10);
        `}
        src="/" alt="" />
      <h1>{props.workTitle}</h1>
      {props.workCategory.map((category, index) => (
        <p
          css={css`
            display: inline-block;
          `}
          key={index}>{category}</p>
      ))}
    </Link>
  </article>
)}

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

      <section>
        <h3>Works</h3>
        <div className={styles.listWorks}>
          {data.allMicrocmsWorks.edges.map(({ node }, index) => (
            <CardWork key={index} workTitle={node.title} workCategory={node.category} />
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
        }
      }
    }
  }
`