import React from "react"
import styles from "./sns-links.module.scss"

export default function SnsLinks() {
    return (
        <ul className={styles.snsLinkList}>
            <li className={styles.snsLink}>
                <a href="https://www.facebook.com/kohei5342">Facebook</a>
            </li>
            <li className={styles.snsLink}>
                <a href="https://www.linkedin.com/in/kohei-aoyama-8b3747130/">LinkedIn</a>
            </li>
            <li className={styles.snsLink}>
                <a href="https://github.com/KoheyAoyama">GitHub</a>
            </li>
        </ul>
    )
}