import React from "react"
import styled from "styled-components"
import SnsLinks from "./sns-links"

const Footer = () => (
    <Body>
        <FooterHead><span role="img" aria-label="Greeting hands">🙌</span>話しかける</FooterHead>
        <SnsLinks />
        <FooterCopyright>© Kohey Aoyama 2020</FooterCopyright>
    </Body>
)

const Body = styled.footer`
    width: 100%;
    height: 240px;
    margin-top: 120px;
    padding: 40px 0 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FooterHead = styled.p`
    margin-bottom: 24px;
    font-size: 2.4rem;
`

const FooterCopyright = styled.small`
    margin-top: auto;
`

export default Footer