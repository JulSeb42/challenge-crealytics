// Packages
import React from "react"
import styled from "styled-components"

// Styles
const Container = styled.div`
    
`

const Label = styled.label`
    
`

const Input = styled.input`
    
`

function Search(props) {
    return (
        // Search input
        <Container>
            <Label htmlFor={props.id}>{props.id.charAt(0).toUpperCase() + props.id.slice(1)}</Label>
            <Input type="search" id={props.id} name={props.id} onChange={props.onChange} value={props.querySearch}/>
        </Container>
    )
}

export default Search

