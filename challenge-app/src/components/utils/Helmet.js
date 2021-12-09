// Packages
import React from "react"
import { Helmet } from "react-helmet"

function HelmetMeta() {
    return (
        <Helmet>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Challenge Crealytics</title>

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,600;0,800;1,400;1,600&display=swap"
                rel="stylesheet"
            />
        </Helmet>
    )
}

export default HelmetMeta
