import React from "react"
import Header from "../component/header"
import Footer from "../component/footer"
import styles from "./layout.module.scss"

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className={styles.container}>
                {children}
            </main>
            <Footer />
        </div>
    )
}