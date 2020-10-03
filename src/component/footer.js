import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.head}>🙌話しかける</p>

            <ul className={footerStyles.snsLinkList}>
                <li className={footerStyles.snsLink}>
                    <Link to="https://www.facebook.com/kohei5342">Facebook</Link>
                </li>
                <li className={footerStyles.snsLink}>
                    <Link to="https://www.linkedin.com/in/kohei-aoyama-8b3747130/">LinkedIn</Link>
                </li>
                <li className={footerStyles.snsLink}>
                    <Link to="https://github.com/KoheyAoyama">GitHub</Link>
                </li>
            </ul>

            <small className={footerStyles.copyright}>© Kohey Aoyama 2020</small>
        </footer>
    )
}