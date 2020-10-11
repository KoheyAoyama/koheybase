import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, postThumbnail }) {
    const { site } = useStaticQuery (
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        url
                        ogpImage
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const metaTitle = title || site.siteMetadata.title
    const twitterCardImage = postThumbnail || `${site.siteMetadata.siteUrl}${site.siteMetadata.ogpImage}`

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title = {metaTitle}
            titleTemplate = {`%s | ${site.siteMetadata.title}`}

            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:card`,
                    content: 'summary_large_image',
                },
                {
                    name: `twitter:site`,
                    content: '@_endoftrack',
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: twitterCardImage,
                },
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `ja-jp`,
    meta: [],
    title: `Koheybase.com`,
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO