// Packages
import React from "react"
import styled from "styled-components"
import { ReactSVG } from "react-svg"

// Styles
const IconStyled = styled(ReactSVG)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    svg {
        fill: black;
        width: 100%;
        height: 100%;
    }

    path {
        fill: ${props => props.color};
    }
`

function Icon(props) {
    return (
        <IconStyled
            src={`/icons/${props.name}.svg`}
            color={props.color}
            size={props.size}
            wrapper="span"
            {...props}
        />
    )
}

export default Icon
