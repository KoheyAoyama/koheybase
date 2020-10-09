import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import styles from "./sns-links.module.scss"

export default function SnsLinks() {
    return (
        <ul className={styles.snsLinkList}>
            <li className={styles.snsLink}>
                <a href="https://www.facebook.com/kohei5342">
                    <FontAwesomeIcon className={styles.iconFacebook} icon={faFacebook} />
                </a>
            </li>
            <li className={styles.snsLink}>
                <a href="https://www.linkedin.com/in/kohei-aoyama-8b3747130/">
                    <FontAwesomeIcon className={styles.iconLinkedin} icon={faLinkedin} />
                </a>
            </li>
            <li className={styles.snsLink}>
                <a href="https://github.com/KoheyAoyama">
                    <FontAwesomeIcon className={styles.iconGithub} icon={faGithub} />
                </a>
            </li>
        </ul>
    )
}