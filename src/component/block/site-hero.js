import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SnsLinks from "../sns-links"

const SiteHero = () => (
    <Root>
        <HeroTesxtWrapper>
          <HeroTitle>爆速でSketchを駆るUIデザイナー</HeroTitle>
          <HeroSubTitle>
            運用性・拡張性の高いUIを最短で構築<br/>
            リリース後の運用・グロースまで並走します
          </HeroSubTitle>
        </HeroTesxtWrapper>
        
        <HeroButton to="/about-me/">青山広平</HeroButton>
        <HeroSnsLinks>
          <SnsLinks />
        </HeroSnsLinks>
      </Root>
)

const Root = styled.section`
width: 100%;
height: 720px;
padding: 0 16px;
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-columns: repeat(12, 1fr);
grid-gap: 32px;
`

const HeroTesxtWrapper = styled.div`
grid-row: 1;
grid-column: 1 / 12;
align-self: end;
`

const HeroTitle = styled.h2`
font-size: 4.8rem;
font-weight: bold;
margin-bottom: 12px;
`

const HeroSubTitle = styled.p`
font-size: 2.0rem;
line-height: 1.7;
`

const HeroButton = styled(props => <Link {...props} />)`
grid-row: 2;
grid-column: 1 / 4;
height: 56px;
text-align: center;
line-height: 56px;
border-radius: 56px;
background: black;
font-size: 2.0rem;
color: white;
`

const HeroSnsLinks = styled.div`
grid-row: 2;
grid-column: 4 / span 9;
height: 56px;
text-align: center;
line-height: 56px;
`

export default SiteHero
