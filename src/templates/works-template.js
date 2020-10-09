import React from "react"
import { graphql } from "gatsby"

const ArticlePost = props => {
    const post = props.data.microcmsWorks
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.cateogry}</p>
            <img src={post.thumbnail.url} alt=""/>
            <p 
                dangerouslySetInnerHTML={{
                    __html: `${post.body}`,
                }}
            ></p>
        </div>
    )
}

export default ArticlePost

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