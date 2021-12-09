// Packages
import React from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.ul`
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    left: 0;
    top: 53px;
    width: 100%;
    display: none;
    background-color: ${Variables.Colors.White};
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: ${Variables.Radiuses.S};
    z-index: 10;

    &.open {
        display: block;
    }
`

const Item = styled.li`
    padding: ${Variables.Margins.XS};
    transition: ${Variables.Transitions.Short};
    cursor: pointer;

    &:hover {
        background-color: ${Variables.Colors.Primary};
        color: ${Variables.Colors.White};
    }
`

function ListSuggestions(props) {
    return (
        <Container className={props.open}>
            {props.suggestions.map(suggestion => (
                <Item key={uuid()} onClick={props.onClick} onMouseDown={props.onMouseDown}>
                    {suggestion.title}
                </Item>
            ))}
        </Container>
    )
}

export default ListSuggestions
