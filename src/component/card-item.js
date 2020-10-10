import React from "react"
import { Link } from "gatsby"
import Tag from "./tag"
import styles from "./card-item.module.scss"

export default function CardItem(props) {

    const switchThumbnail = (isPrivate, url) => {
        if ( isPrivate === false ) {
            return url
        }
        return url = `../../isPrivatePlaceholderImage.png`
    }
    const thumbnailUrl = switchThumbnail(props.isPrivate, props.thumbnail.url)
    
    return (
        <article className={styles.cardItem}>
            <Link className={styles.cardItem__wrapper} to={`/works/${props.id}`}>
                <div className={styles.cardItem__thumbnailWrapper} alt="">
                    <img className={styles.cardItem__thumbnail} src={thumbnailUrl} alt="hoge" />
                </div>
                <div className={styles.cardItem__innerWrapper}>
                    <h1 className={styles.cardItem__title}>{props.workTitle}</h1>
                    {props.workCategory.map((category, index) => (
                        <Tag content={category} key={index} />
                    ))}
                </div>
            </Link>
        </article>
    )
}