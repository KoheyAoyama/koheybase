import React from "react"
import styled from "styled-components"
import CardItem from "../card-item"
import WorksPlaceholder from "../Works-placeholder"
import { MediaQuery } from "../../utils/mediaquery"

const WorksList = ({ data }) => (
<Root>
    <SectionHead>Works</SectionHead>
    <List>
        {data.allMicrocmsWorks.edges.map(({ node }, index) => (
        <CardItem key={index}
            workTitle={node.title}
            workCategory={node.category}
            thumbnail={node.thumbnail}
            isPrivate={node.isPrivate}
            id={node.id}
        />
        ))}
        <WorksPlaceholder />
    </List>
</Root>
)

const Root = styled.section`
padding: 0 16px;
`

const SectionHead = styled.h3`
font-size: 4.0rem;
font-weight: bold;
margin-bottom: 32px;
`

const List = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 32px;

${MediaQuery()`
    grid-template-columns: 1fr;
`}
`

export default WorksList