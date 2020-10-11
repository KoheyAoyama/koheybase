import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Tag from "./tag"

const CardItem = (props) => {

    const switchThumbnail = (isPrivate, url) => {
        if ( isPrivate === false ) {
            return url
        }
        return url = `../../isPrivatePlaceholderImage.png`
    }
    const thumbnailUrl = switchThumbnail(props.isPrivate, props.thumbnail.url)
    
    return (
        <CardBody>
            <BodyWrapper to={`/works/${props.id}`}>
                <ThumbnailWrapper alt="">
                    <ThumbnailImg src={thumbnailUrl} alt="hoge" />
                </ThumbnailWrapper>
                <DescriptionWrapper>
                    <CardTitle>{props.workTitle}</CardTitle>
                    {props.workCategory.map((category, index) => (
                        <Tag content={category} key={index} />
                    ))}
                </DescriptionWrapper>
            </BodyWrapper>
        </CardBody>
    )
}

const CardBody = styled.article`
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    opacity: 1.0;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;

    &:hover {
        opacity: 0.8;
        transition-duration: 200ms;
        transition-timing-function: ease-in-out;

        & * img {
            transform: scale(1.1);
            transition-duration: 200ms;
            transition-timing-function: ease-in-out;
        }
    }
`

const BodyWrapper = styled(props => <Link {...props} />)`
    display: block;
    width: 100%;
    height: 100%;
`

const ThumbnailWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 16px 16px 0 0;
    background: rgba(0,0,0,.04);
    overflow: hidden;

    &:before {
        content: '';
        display: block;
        padding-top: 56.25%;
    }
`

const ThumbnailImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
    transform: scale(1.0);
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
`

const DescriptionWrapper = styled.div`
    padding: 16px 12px 24px 12px;
`

const CardTitle = styled.h1`
    margin-left: 3px;
    margin-bottom: 12px;
    color: rgba(0,0,0,.87);
    font-weight: bold;
`

export default CardItem