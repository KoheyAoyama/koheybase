import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../component/seo"
import Layout from "../component/layout"
import Tag from "../component/tag"

const ArticlePost = props => {
    const post = props.data.microcmsWorks
    return (
        <Layout>
            <SEO
                title={post.title}
            />
            <Root>
                <ContentWrapper>
                    <PostTitle>{post.title}</PostTitle>

                    {post.category.map((category, index) => (
                        <Tag content={category} key={index} />
                    ))}
                    <Margin16 />

                    <PostThumbnailWrapper>
                        <PostThumbnail src={post.thumbnail.url} alt=""/>
                    </PostThumbnailWrapper>
                    <PostBody
                        dangerouslySetInnerHTML={{
                            __html: `${post.body}`,
                        }}
                    ></PostBody>
                </ContentWrapper>
            </Root>
        </Layout>
    )
}

const Root = styled.section`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-gap: 32px;
`

const ContentWrapper = styled.div`
grid-column: 3 / span 8;
margin-top: 80px;
`

const PostTitle = styled.h1`
font-size: 4.4rem;
font-weight: bold;
margin-bottom: 16px;
`

const PostThumbnailWrapper = styled.p`
position: relative;
width: 100%;
height: auto;
margin-bottom: 64px;

&:after {
    content: '';
    display: block;
    padding-top: 56.25%;
}
`

const PostThumbnail = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
`

const PostBody = styled.div`
& > h1 {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 12px;
}

& > h2 {
    font-size: 2.0rem;
    font-weight: bold;
    margin-bottom: 12px;
}

& > h3 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 12px;
}

& > h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 12px;
}

& > h5 {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 12px;
}

& * li {
    line-height: 2.4;
}

& > ul  {
    list-style-type: disc;
    margin-bottom: 24px;
    margin-left: 32px;
}

& * li > ul {
    margin-left: 32px;
}

& > ol  {
    list-style-type: decimal;
    margin-bottom: 24px;
    margin-left: 32px;
}

& * li > ol {
    list-style-type: disc;
    margin-left: 32px;
}

& > p {
    margin-bottom: 24px;
    line-height: 2.0;
}

& > pre {
    margin-bottom: 32px;
    padding: 16px 24px;
    background-color: rgba(0, 0, 0, 0.04);
    border: solid 2px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    color: rgba(0, 0, 0, 0.54);
}

& p > code {
    margin-bottom: 32px;
    padding: 2px 8px;
    background-color: rgba(0, 0, 0, 0.04);
    border: solid 2px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    color: rgba(255, 0, 0, 0.54);
}

& * img {
    width: 100%;
}

& * a {
    position: relative;
    display: block;
    width: 100%;
    height: 64px;
    padding: 0 32px;
    border: solid 1px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    font-color: rgba(0, 0, 0, 0.54);
    line-height: 64px;

    &:after {
        content: "外部リンク";
        position: absolute;
        top: 0;
        right: 16px;
        display: block;
        font-size: 1.2rem;
        font-weight: normal;
        color: rgba(0, 0, 0, 0.26);
    }
}

& * em   {
}

& * strong {
}
`

const Margin16 = styled.div`
heigth: 16px;
`

export const query = graphql`
    query($id: String!) {
        microcmsWorks(id: {eq: $id}) {
            title
            category
            thumbnail {
                url
            }
            body
        }
    }
`

export default ArticlePost
