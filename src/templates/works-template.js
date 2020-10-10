import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/layout"
import Tag from "../component/tag"
import styles from "./works-template.module.scss"

const ArticlePost = props => {
    const post = props.data.microcmsWorks
    return (
        <Layout>
            <section className={styles.body}>
                <div className={styles.bodyWrapper}>
                    <h1 className={styles.postTitle}>{post.title}</h1>
                    <div className={styles.postCategories}>
                        {post.category.map((category, index) => (
                            <Tag content={category} key={index} />
                        ))}
                    </div>
                    <p className={styles.postThumbnailWrapper}>
                        <img className={styles.postThumbnail} src={post.thumbnail.url} alt=""/>
                    </p>
                    <div
                        className={styles.postBody}
                        dangerouslySetInnerHTML={{
                            __html: `${post.body}`,
                        }}
                    ></div>
                </div>
            </section>
        </Layout>
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