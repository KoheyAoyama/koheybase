import React from "react"
import styled from "styled-components"
import Layout from "../component/layout"
import SEO from "../component/seo"
import styles from "./about-me.module.scss"

const BioTable = props => {
    const TableWrapper = styled.div`
        border-bottom: solid 1px rgba(0,0,0,.12);
        display: grid;
        grid-template-columns: 40% 40% 20%;
        grid-template-rows: 64px;
        align-items: center;
    `

    return (
        <tr>
            <TableWrapper>
                <td>{props.work}</td>
                <td>{props.jobTitle}</td>
                <td>{props.term}</td>
            </TableWrapper>
        </tr>
    )
}

export default function AboutMe() {
    return (
        <Layout>
            <SEO
                title="About Me"
                description="青山広平について、自己紹介、得意分野、略歴など"
            />
            <div className={styles.container}>
                <h1 className={styles.title}>About Me</h1>

                <div className={styles.content}>
                    <img className={styles.profileImage} src={`../../img_myProfile.png`} alt="青山広平のプロフィール画像" />
                    
                    <h2 className={styles.myName}>
                        青山広平
                        <span className={styles.myNameEn}>Kohey Aoyama</span>
                    </h2>

                    <div className={styles.bodyText}>
                        <p className={styles.bodyTextParagraph}>千葉県在住、都内ベンチャー企業に所属のUIデザイナー。</p>
                        <p className={styles.bodyTextParagraph}>サービスに特化した、効果的で拡張性の高いUIキットを最速で構築。開発スピードが優先されるフェーズにおいてもクオリティを疎かにせず、双方を両立したUIデザインを提供します。これにより、特に新規事業でMVPを必要とするようなフェーズで強力にサポートできます。</p>
                        
                        <h3 className={styles.bodyTextSubhead}>【UIデザイン】</h3>

                        <ul className={styles.bodyTextParagraph}>
                            <li>サービスのコア体験を高効率でユーザーに提供するUIデザインの構築</li>
                            <li>サービスのグロース支援</li>
                        </ul>

                        <h3 className={styles.bodyTextSubhead}>【WordPress制作】</h3>

                        <ul className={styles.bodyTextParagraph}>
                            <li>フルスクラッチでのオリジナルテーマ制作</li>
                            <li>サイト公開後の運用に最適化したCMSコンテンツ設計</li>
                            <li>テンプレートエンジンやFLOCSSによるCSS設計を利用した開発効率の高いサイト構築</li>
                        </ul>
                    </div>

                    <div className={styles.sectionMargin}></div>

                    <h3 className={styles.bodyTextSubhead}>略歴</h3>

                    <table className={styles.bioTable}>
                        <BioTable work="Nanameue inc." jobTitle="UIデザイナー" term="2019 - 現在" />
                        <BioTable work="デジタルハリウッドSTUDIO上野" jobTitle="Webデザイン専攻" term="2019" />
                        <BioTable work="機械系製造メーカー2社" jobTitle="研究開発・技術設計" term="2011 - 2019" />
                        <BioTable work="鶴岡工業高等専門学校" jobTitle="機械電気システム工学専攻" term="2005 - 2011" />
                    </table>
                </div>
            </div>
        </Layout>
    )
}