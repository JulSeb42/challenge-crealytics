// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.span``

const Input = styled.input`
    display: none;

    &:checked ~ label {
        background-color: ${Variables.Colors.Primary};
        color: ${Variables.Colors.White};
    }
`

const Label = styled.label`
    padding: ${Variables.Margins.XXS} ${Variables.Margins.S};
    border-radius: ${Variables.Radiuses.Round};
    background-color: ${Variables.Colors.LighterGray};
    transition: ${Variables.Transitions.Short};
    cursor: pointer;

    &:hover {
        background-color: ${Variables.Colors.PrimaryHover};
        color: ${Variables.Colors.White};
    }
`

function Selector(props) {
    return (
        <Container>
            <Input
                type="radio"
                name={props.name}
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                defaultChecked={props.defaultChecked}
            />

            <Label htmlFor={props.id} id={`label-${props.id}`}>{props.label}</Label>
        </Container>
    )
}

export default Selector
