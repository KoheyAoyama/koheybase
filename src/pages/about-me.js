import React from "react"
import Media from "react-media"
import styled from "styled-components"
import Layout from "../component/layout"
import SEO from "../component/seo"
import { MediaQuery } from "../utils/mediaquery"

const AboutMe = () => (
    <Layout>
        <SEO
            title="About Me"
            description="青山広平について、自己紹介、得意分野、略歴など"
        />

        <Root>
            <PageTitle>About Me</PageTitle>

            <ContentWrapper>
                <ProfileImageWrapper>
                    <Profileimage src={`../../img_myProfile.png`} alt="青山広平のプロフィール画像" />
                </ProfileImageWrapper>
                <Margin32 />
                
                <ProfileName>
                    青山広平
                    <ProfleNameEn>Kohey Aoyama</ProfleNameEn>
                </ProfileName>

                <ProfileDescription>
                    <p>千葉県在住、都内ベンチャー企業に所属のUIデザイナー。</p>
                    <Margin32 />
                    <p>サービスに特化した、効果的で拡張性の高いUIキットを最速で構築。開発スピードが優先されるフェーズにおいてもクオリティを疎かにせず、双方を両立したUIデザインを提供します。これにより、特に新規事業でMVPを必要とするようなフェーズで強力にサポートできます。</p>
                    <Margin32 />

                    <BodySubHead>【UIデザイン】</BodySubHead>
                    <ul>
                        <li>サービスのコア体験を高効率でユーザーに提供するUIデザインの構築</li>
                        <li>サービスのグロース支援</li>
                    </ul>
                    <Margin32 />

                    <BodySubHead>【WordPress制作】</BodySubHead>
                    <ul>
                        <li>フルスクラッチでのオリジナルテーマ制作</li>
                        <li>サイト公開後の運用に最適化したCMSコンテンツ設計</li>
                        <li>テンプレートエンジンやFLOCSSによるCSS設計を利用した開発効率の高いサイト構築</li>
                    </ul>
                    <Margin32 />

                </ProfileDescription>

                <Margin32 />
                <Margin32 />

                <BodySubHead>略歴</BodySubHead>

                <ProfileBiography>
                    <BioTable work="Nanameue inc." jobTitle="UIデザイナー" term="2019 - 現在" />
                    <BioTable work="デジタルハリウッドSTUDIO上野" jobTitle="Webデザイン専攻" term="2019" />
                    <BioTable work="機械系製造メーカー2社" jobTitle="研究開発・技術設計" term="2011 - 2019" />
                    <BioTable work="鶴岡工業高等専門学校" jobTitle="機械電気システム工学専攻" term="2005 - 2011" />
                </ProfileBiography>
            </ContentWrapper>
        </Root>
    </Layout>
)

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

const Root = styled.div`
padding: 0 16px;
display: grid;
grid-template-rows: 1fr;
grid-template-columns: repeat(12, 1fr);
grid-gap: 32px;
margin-top: 80px;

${MediaQuery()`
grid-template-columns: 1fr;
margin-top: 40px;
`}
`

const PageTitle = styled.h1`
grid-column: 1 / span 3;
font-size: 4.0rem;
font-weight: bold;

${MediaQuery()`
    grid-column: 1;
`}
`

const ContentWrapper = styled.div`
grid-column: 4 / 12;

${MediaQuery()`
    grid-column: 1;
`}
`

const ProfileImageWrapper = styled.div`
    position: relative;
    width: 320px;
    height: auto;

    &:after {
        content: '';
        display: block;
        width: 100%;
        padding-top: 100%;
    }

    ${MediaQuery()`
        width: 100%;
        height: 100%;
    `}
`

const Profileimage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: contain;
`

const ProfileName = styled.h2`
margin-bottom: 40px;
display: flex;
flex-direction: column;
font-size: 2.4rem;
font-weight: bold;
`

const ProfleNameEn = styled.span`
margin-top: 8px;
font-size: 1.6rem;
font-weight: normal;
`

const ProfileDescription = styled.div`
line-height: 2.0;
`

const BodySubHead = styled.h3`
margin-bottom: 8px;
font-weight: bold;
`

const ProfileBiography = styled.table`
width: 100%;
`

const Margin32 = styled.div`
height: 32px;
`

export default AboutMe
