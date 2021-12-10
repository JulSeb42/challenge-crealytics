// Packages
import { createGlobalStyle } from "styled-components"

// Variables
import * as Variables from "./Variables"

// Styles
const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: ${Variables.FontFamily};
        color: ${Variables.Colors.Black};
        line-height: ${Variables.LineHeight};
    }
`

export default GlobalStyles
