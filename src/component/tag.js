import React from "react"
import styled from "styled-components"

const Tag = (props) => (
        <Body>{props.content}</Body>
)

const Body = styled.p`
    display: inline-block;
    margin: 0 4px 6px 0;
    padding: 4px 8px;
    border-radius: 100px;
    border: solid 1px rgba(0,0,0,.12);
    color: rgba(0,0,0,.54);
    font-size: 1.2rem;
`

export default Tag