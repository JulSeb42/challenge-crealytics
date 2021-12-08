// Packages
import React from "react"
import styled from "styled-components"

// Styles
const Container = styled.div`
    
`

const Input = styled.input`
    
`

const Label = styled.label`
    
`

function Checkbox(props) {
    return (
        <Container>
            <Input type="checkbox" name={props.name} id={props.id} onChange={props.onChange} />
            <Label htmlFor={props.id}>{props.label}</Label>
        </Container>
    )
}

export default Checkbox

