import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Koheybase.com</h1>
            <ul className={styles.navigation}>
                <li className={styles.navigationItem}>
                    <Link className={styles.navigationItemText} to="/">Home</Link>
                </li>
                <li className={styles.navigationItem}>
                    <Link className={styles.navigationItemText} to="/about-me/">About Me</Link>
                </li>
            </ul>
        </header>
    )
}