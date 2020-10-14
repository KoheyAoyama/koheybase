import React from "react"
import styled from "styled-components"
import Header from "../component/header"
import Footer from "../component/footer"
import { MediaQuery } from "../utils/mediaquery"

const Layout = ({ children }) => (
    <div>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </div>
)

const Main = styled.main`
    max-width: 1140px;
    margin: 0 auto;
    padding-top: 96px;

    ${MediaQuery()`
        padding-top: 72px;
    `}
`

export default Layout