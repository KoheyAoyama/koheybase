import React from "react"
import SnsLinks from "./sns-links"
import footerStyles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.head}>🙌話しかける</p>
            <SnsLinks></SnsLinks>
            <small className={footerStyles.copyright}>© Kohey Aoyama 2020</small>
        </footer>
    )
}