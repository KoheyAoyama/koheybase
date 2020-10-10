const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
    {
        allMicrocmsWorks {
            edges {
                node {
                    id
                }
            }
        }
    }
    `).then(result => {
        if (result.errors){
            throw result.errors
        }

        result.data.allMicrocmsWorks.edges.map(edge => {
            createPage({
                path: `works/${edge.node.id}`,
                component: path.resolve("./src/templates/works-template.js"),
                context: {
                    id: edge.node.id,
                },
            })
        })
    })
}