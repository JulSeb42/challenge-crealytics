// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Input = styled.input`
    display: none;

    &:checked ~ .toggle {
        background-color: ${Variables.Colors.Success};
        border-color: ${Variables.Colors.Success};

        &:before {
            left: calc(24px - 8px - 4px);
            background-color: ${Variables.Colors.White};
        }
    }
`

const ToggleStyled = styled.span`
    margin-right: ${Variables.Margins.XXS};
    width: 24px;
    height: 14px;
    border: 1px solid ${Variables.Colors.Primary};
    border-radius: 24px;
    position: relative;
    cursor: pointer;
    transition: ${Variables.Transitions.Short};
    z-index: 0;

    &:before {
        content: "";
        position: absolute;
        --size: 8px;
        width: var(--size);
        height: var(--size);
        background-color: ${Variables.Colors.Primary};
        top: calc(50% - var(--size) / 2);
        border-radius: 50%;
        left: 2px;
        transition: ${Variables.Transitions.Short};
    }
`

const Label = styled.label`
    cursor: pointer;
`

function Toggle(props) {
    return (
        <Container>
            <Input
                type="checkbox"
                name={props.name}
                id={props.id}
                onChange={props.onChange}
            />
            
            <ToggleStyled htmlFor={props.id} className="toggle" />
            
            <Label htmlFor={props.id}>{props.label}</Label>
        </Container>
    )
}

export default Toggle
