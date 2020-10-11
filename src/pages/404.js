import React from "react"
import styled from "styled-components"
import Layout from "../component/layout"

const NotFound = () => (
    <Layout>
        <Root>
            <p>Sorry, You Are Missing!</p>
        </Root>
    </Layout>
)

const Root = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    width: 1005;
    height: 60vh;
`

export default NotFound