import React from "react"
import SnsLinks from "./sns-links"
import styles from "./footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.head}><span role="img" aria-label="Greeting hands">🙌</span>話しかける</p>
            <SnsLinks />
            <small className={styles.copyright}>© Kohey Aoyama 2020</small>
        </footer>
    )
}