// Packages
import React from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Styles
const Container = styled.ul`
    max-height: 200px;
    overflow-y: scroll;
`

const Item = styled.li``

function ListSuggestions(props) {
    return (
        <Container className={props.open}>
            {props.suggestions.map(suggestion => (
                <Item key={uuid()} onClick={props.onClick}>
                    {suggestion}
                </Item>
            ))}
        </Container>
    )
}

export default ListSuggestions
