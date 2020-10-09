const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
        allMicrocmsWorks(sort: {fields: publishedAt, order: DESC}) {
            edges {
                node {
                    id
                }
            }
        }
    }
    `)

    if (result.errors) {
        throw result.errors
    }

    result.data.allMicrocmsWorks.edges.map(edge => {
        createPage({
            path: `works/${edge.node.id}`,
            component: path.resolve(
                "./src/templates/works-template.js"
            ),
            context: {
                id: edge.node.id,
            },
        })
    })
}