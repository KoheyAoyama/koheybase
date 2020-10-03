import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"

export default function Header() {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.title}>Koheybase.com</h1>
            <ul className={headerStyles.navigation}>
                <li className={headerStyles.navigationItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className={headerStyles.navigationItem}>
                    <Link to="/about-me/">About Me</Link>
                </li>
            </ul>
        </header>
    )
}