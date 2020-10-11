import React from "react"
import styled from "styled-components"
import CardItem from "../card-item"

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
grid-gap: 32px
`

const WorksPlaceholder = styled.div`
position: relative;
width: 100%;
height: 100%;
background: transparent;
border: solid 1px rgba(0, 0, 0, 0.12);
border-radius: 24px;

&:after {
    content: "鋭意活動中！";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(0, 0, 0, 0.26);
}
`

export default WorksList