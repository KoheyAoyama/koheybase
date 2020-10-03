import React from "react"
import layoutStyles from "./layout.module.css"
import Header from "../component/header"
import Footer from "../component/footer"

export default function Layout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className={layoutStyles.container}>
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}