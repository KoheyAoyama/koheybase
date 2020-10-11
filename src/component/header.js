import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => (
    <Body>
        <HeaderTitle>
            <Link to="/">Koheybase.com</Link>
        </HeaderTitle>
        <Header__Navigation>
            <NavigationItem>
                <NavigationText to="/">Home</NavigationText>
            </NavigationItem>
            <NavigationItem>
                <NavigationText to="/about-me/">About Me</NavigationText>
            </NavigationItem>
        </Header__Navigation>
    </Body>
)

const Body = styled.header`
    position: fixed;
    z-index: 999;
    width: 100%;
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 96px;
    padding: 0 64px;
    background-color: rgba(255, 255, 255, 1.0);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px;
`

const HeaderTitle = styled.h1`
    grid-row: 1;
    grid-column: 1;
    justify-self: start;
    align-self: center;
    font-size: 3.4rem;
    font-weight: bold;
`

const Header__Navigation = styled.ul`
    grid-row: 1;
    grid-column: 2;
    justify-self: end;
    display: flex;
    list-style: none;
`

const NavigationItem = styled.li`
    align-self: center;
    padding: 0 20px;
`

const NavigationText = styled(props => <Link {...props} />)`
    font-size: 2.0rem;
    font-weight: bold;
    color: black;
`

export default Header