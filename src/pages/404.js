import React from "react"
import styled from "styled-components"
import Layout from "../component/layout"
import WorksList from "../component/block/works-list"
import { MediaQuery } from "../utils/mediaquery"

const NotFound = ({ data }) => (
    <Layout>
        <Root>
            <div>
                <FourZeroFour>404</FourZeroFour>
                <NotFoundMessage>Sorry, You Have Lost!</NotFoundMessage>
            </div>
            <WorksList data={ data } />
        </Root>
    </Layout>
)

const Root = styled.div`
    display: grid;
    grid-gap: 80px;
    justify-items: center;
    align-items: center;
    margin-top: 88px;
    width: 100%;
    height: auto;

    ${MediaQuery()`
        margin-top: 48px;
    `}
`

const FourZeroFour = styled.p`
    margin-bottom: 16px;
    font-size: 8.8rem;
    font-weight: bold;
    text-align: center;
    color: rgba(0, 0, 0, 0.54);
`

const NotFoundMessage = styled.p`
    font-size: 2.0rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.54);
`

export const query = graphql`
  {
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
          id
        }
      }
    }
  }
`

export default NotFound