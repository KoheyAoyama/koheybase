import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SnsLinks from "../sns-links"
import { MediaQuery } from "../../utils/mediaquery"

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
position: relative;
width: 100%;
height: 70vh;
padding: 0 16px;
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-columns: repeat(12, 1fr);
grid-gap: 32px;

${MediaQuery()`
  height: 80vh;
  padding: 48px 16px 0 16px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
`}
`

const HeroTesxtWrapper = styled.div`
grid-row: 1;
grid-column: 1 / 12;
align-self: end;

${MediaQuery()`
  grid-column: 1;
`}
`

const HeroTitle = styled.h2`
font-size: 4.8rem;
font-weight: bold;
margin-bottom: 12px;

${MediaQuery()`
  font-size: 10vw;
  line-height: 1.3;
`}
`

const HeroSubTitle = styled.p`
font-size: 2.0rem;
line-height: 1.7;

${MediaQuery()`
  font-size: 5vw;
`}
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

${MediaQuery()`
  grid-column: 1;
  align-self: end;
`}
`

const HeroSnsLinks = styled.div`
grid-row: 2;
grid-column: 4 / span 9;
height: 56px;
text-align: center;
line-height: 56px;

${MediaQuery()`
  grid-column: 1;
  grid-row: 3;
  justify-self: center;
`}
`

export default SiteHero
