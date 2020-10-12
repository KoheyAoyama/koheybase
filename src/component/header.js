import React, { Fragment } from "react"
import { Link } from "gatsby"
import Media from "react-media"
import styled from "styled-components"
import { MediaQuery } from "../utils/mediaquery"

const Header = () => {
    return (
        <Root>
            <HeaderTitle>
                <Link to="/">Koheybase.com</Link>
            </HeaderTitle>
            
            <Media queries={{
                small: "(max-width: 768px)",
                large: "(min-width: 769px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.small &&
                            <DrawerIcon>
                                <span></span>
                                <span></span>
                                <span></span>
                            </DrawerIcon>
                        }
                        {matches.large &&
                            <Header__Navigation>
                                <NavigationItem>
                                    <NavigationText to="/">Home</NavigationText>
                                </NavigationItem>
                                <NavigationItem>
                                    <NavigationText to="/about-me/">About Me</NavigationText>
                                </NavigationItem>
                            </Header__Navigation>
                        }
                    </Fragment>
                )}
            </Media>
        </Root>
    )
}

const Root = styled.header`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 96px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 64px;
    background-color: rgba(255, 255, 255, 1.0);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px;

    ${MediaQuery()`
        height: 72px;
        padding: 0 16px;
    `}
`

const HeaderTitle = styled.h1`
    grid-row: 1;
    grid-column: 1;
    justify-self: start;
    align-self: center;
    font-size: 3.4rem;
    font-weight: bold;

    ${MediaQuery()`
        font-size: 8vw;
    `}
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

const DrawerIcon = styled.div`
    width: 32px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > span:nth-child(1) {
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.87);
    }

    & > span:nth-child(2) {
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.87);
    }

    & > span:nth-child(3) {
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: rgba(0, 0, 0, 0.87);
    }
`

export default Header