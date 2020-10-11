import React from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const SnsLinks = () => (
    <Root>
        <SnsItem>
            <a href="https://www.facebook.com/kohei5342" target="_blank" rel="noopener noreferrer">
                <SnsIcon icon={faFacebook} facebook="true" />
            </a>
        </SnsItem>
        <SnsItem>
            <a href="https://www.linkedin.com/in/kohei-aoyama-8b3747130/" target="_blank" rel="noopener noreferrer">
                <SnsIcon icon={faLinkedin} linkedin="true" />
            </a>
        </SnsItem>
        <SnsItem>
            <a href="https://github.com/KoheyAoyama" target="_blank" rel="noopener noreferrer">
                <SnsIcon icon={faGithub} github="true" />
            </a>
        </SnsItem>
    </Root>
)

const Root = styled.ul`
    display: flex;
`

const SnsItem = styled.li`
    margin-right: 32px;
    font-size: 48px;

    &:last-child {
        margin-right: 0;
    }
`

const SnsIcon = styled(props => <FontAwesomeIcon {...props} />)`
    ${props => props.facebook && css`
        color: #1877F2;
    `}

    ${props => props.linkedin && css`
        color: #0077B5;
    `}

    ${props => props.github && css`
        color: #333333;
    `}
`

export default SnsLinks