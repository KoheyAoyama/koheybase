import React from "react"
import { Link } from "gatsby"
import styles from "./card-item.module.scss"

export default function CardItem(props) {
    return (
        <article className={styles.cardItem}>
            <Link to="/">
                <div className={styles.cardItem__thumbnailWrapper} alt="">
                    <img className={styles.cardItem__thumbnail} src={props.thumbnail.url} alt="hoge" />
                </div>
                <div className={styles.cardItem__wrapper}>
                    <h1 className={styles.cardItem__title}>{props.workTitle}</h1>
                    {props.workCategory.map((category, index) => (
                    <p className={styles.cardItem__tag} key={index}>{category}</p>
                    ))}
                </div>
            </Link>
        </article>
    )
}