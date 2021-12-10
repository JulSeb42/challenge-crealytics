// Packages
import React from "react"

// Content
import HelmetMeta from "./components/utils/Helmet"
import Page from "./components/Page"

// Styles
import GlobalStyles from "./components/styles/GlobalStyles"

function App() {
    return (
        <>
            <HelmetMeta />
            <GlobalStyles />
            <Page />
        </>
    )
}

export default App
