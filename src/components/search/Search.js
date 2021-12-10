// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XXS};
`

const Label = styled.label`
    font-weight: ${Variables.FontWeights.Bold};
    color: ${Variables.Colors.Primary};
`

const Input = styled.input`
    width: 100%;
    max-width: 400px;
    justify-self: start;
    padding: ${Variables.Margins.XXS} ${Variables.Margins.XS};
    border: 1px solid ${Variables.Colors.LightGray};
    border-radius: ${Variables.Radiuses.S};

    &:focus {
        border-color: ${Variables.Colors.Primary};
    }
`

function Search(props) {
    return (
        // Search input
        <Container>
            <Label htmlFor={props.id}>
                {props.id.charAt(0).toUpperCase() + props.id.slice(1)}
            </Label>

            <Input
                type="search"
                id={props.id}
                name={props.id}
                onChange={props.onChange}
                value={props.querySearch}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
            />
        </Container>
    )
}

export default Search
