import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import Media from "react-media"
import styled, { css } from "styled-components"
import { MediaQuery } from "../utils/mediaquery"

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    console.log(navbarOpen)

    return (
        <Root>
            <HeaderTitle>
                <Link to="/">Koheybase.com</Link>
            </HeaderTitle>
            
            <Media queries={{
                large: "(min-width: 769px)",
                small: "(max-width: 768px)"
            }}>
                {matches => (
                    <Fragment>
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
                        {matches.small &&
                            <div>
                                <div
                                    navbarOpen={navbarOpen}
                                    onClick={()=> setNavbarOpen(!navbarOpen)}
                                >
                                    {navbarOpen ? 
                                        <DrawerIcon>
                                            <span open />
                                            <span open />
                                            <span open />
                                        </DrawerIcon>
                                        :
                                        <DrawerIcon>
                                            <span />
                                            <span />
                                            <span />
                                        </DrawerIcon>
                                    }
                                </div>

                                {navbarOpen ? 
                                    <Header__Navigation open >
                                        <NavigationItem open >
                                            <NavigationText to="/" >Home</NavigationText>
                                        </NavigationItem>
                                        <NavigationItem open >
                                            <NavigationText to="/about-me/" >About Me</NavigationText>
                                        </NavigationItem>
                                    </Header__Navigation>
                                    :
                                    <Header__Navigation>
                                        <NavigationItem>
                                            <NavigationText to="/">Home</NavigationText>
                                        </NavigationItem>
                                        <NavigationItem>
                                            <NavigationText to="/about-me/">About Me</NavigationText>
                                        </NavigationItem>
                                    </Header__Navigation>
                                }
                                
                            </div>
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
    box-shadow: rgba(0, 0, 0, 0.10) 0px 2px 8px;

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
    display: flex;
    list-style: none;

    ${MediaQuery()`
        display: none;
        position: absolute;
        top: 72px;
        left: 0;
        z-index: -1;
        width: 100vw;
        height: auto;
        padding-top: 8px;
        padding-bottom: 24px;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 1.0);

    `}

    ${props => props.open && css`
        display: block !important;
    `}
`

const NavigationItem = styled.li`
    align-self: center;
    padding: 0 20px;

    ${MediaQuery()`
        display: block;
        width: 100%;
        height: auto;
        line-height: 48px;
        opacity: 0;
    `}

    ${props => props.open && css`
        opacity: 1 !important;
    `}
`

const NavigationText = styled(props => <Link {...props} />)`
    display: block;
    width: 100%;
    height: 100%;
    font-size: 2.0rem;
    font-weight: bold;
    color: black;
`

const DrawerIcon = styled.div`
    width: 6.4vw;
    height: 4.8vw;
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