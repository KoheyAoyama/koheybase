import React from "react"
import { Link } from "gatsby"
import snsLinksStyles from "./sns-links.module.css"

export default function SnsLinks() {
    return (
        <ul className={snsLinksStyles.snsLinkList}>
            <li className={snsLinksStyles.snsLink}>
                <Link to="https://www.facebook.com/kohei5342">Facebook</Link>
            </li>
            <li className={snsLinksStyles.snsLink}>
                <Link to="https://www.linkedin.com/in/kohei-aoyama-8b3747130/">LinkedIn</Link>
            </li>
            <li className={snsLinksStyles.snsLink}>
                <Link to="https://github.com/KoheyAoyama">GitHub</Link>
            </li>
        </ul>
    )
}