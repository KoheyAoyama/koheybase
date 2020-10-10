import React from "react"
import styles from "./tag.module.scss"

const Tag = (props) => {
    return (
        <p className={styles.tag}>{props.content}</p>
    )
}

export default Tag