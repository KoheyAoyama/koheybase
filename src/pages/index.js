import React from "react"
import "./reset.css"
import { Link } from "gatsby"
import Layout from "../component/layout"
import SnsLinks from "../component/sns-links"
import indexStyles from "./index.module.css"

const CardWork = props => (
  <article style={{
    width: `100%`,
    height: `240px`,
  }}>
    <Link to="/">
      <img style={{
        marginBottom: `8px`,
        paddingTop: `75%`,
        background: `rgba(0,0,0,.10)`,
      }} src="/" alt="" />
      <h1>{props.workTitle}</h1>
      <p>{props.workCategory}</p>
    </Link>
  </article>
)

export default function Home() {
  return (
    <Layout>
      <section className={indexStyles.siteHero}>
        <div className={indexStyles.siteHeroTitle}>
          <h2>爆速でSketchを駆るUIデザイナー</h2>
          <p>
            運用性・拡張性の高いUIを最短で構築<br/>
            リリース後の運用・グロースまで並走します
          </p>
        </div>
        
        <Link className={indexStyles.buttonAboutMe} to="/about-me/">青山広平</Link>
        <div className={indexStyles.snsLinks}>
          <SnsLinks></SnsLinks>
        </div>
      </section>

      <section>
        <h3>Works</h3>
        <div className={indexStyles.listWorks}>
          <CardWork workTitle="SNS App" workCategory="UI/UXデザイン"></CardWork>
          <CardWork workTitle="SNS App" workCategory="UI/UXデザイン"></CardWork>
          <CardWork workTitle="SNS App" workCategory="UI/UXデザイン"></CardWork>
          <CardWork workTitle="SNS App" workCategory="UI/UXデザイン"></CardWork>
          <CardWork workTitle="SNS App" workCategory="UI/UXデザイン"></CardWork>
        </div>
      </section>
    </Layout>
  )
}
