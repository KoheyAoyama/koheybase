import React from "react"
import styled from "styled-components"

const WorksPlaceholder = () => (
    <Root>
        <div>
            <Message>鋭意活動中！</Message>
            <Button href="https://www.facebook.com/kohei5342" target="_blank" rel="noopener noreferrer">仕事を依頼する</Button>
        </div>
    </Root>
)

const Root = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;
    border: solid 1px rgba(0, 0, 0, 0.12);
    border-radius: 24px;
    text-align: center;
`

const Message = styled.p`
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.26);
`

const Button = styled.a`
    display: inline-block;
    width: auto;
    height: 36px;
    padding: 0 16px;
    border: solid 1px rgba(0, 0, 0, 0.54);
    border-radius: 36px;
    font-size: 1.4rem;
    line-height: 33px;
    color: rgba(0, 0, 0, 0.54);
`

export default WorksPlaceholder