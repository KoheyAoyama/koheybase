import React from "react"
import { Link } from "gatsby"
import styles from "./sns-links.module.scss"

export default function SnsLinks() {
    return (
        <ul className={styles.snsLinkList}>
            <li className={styles.snsLink}>
                <Link to="https://www.facebook.com/kohei5342">Facebook</Link>
            </li>
            <li className={styles.snsLink}>
                <Link to="https://www.linkedin.com/in/kohei-aoyama-8b3747130/">LinkedIn</Link>
            </li>
            <li className={styles.snsLink}>
                <Link to="https://github.com/KoheyAoyama">GitHub</Link>
            </li>
        </ul>
    )
}