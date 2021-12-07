// Packages
import React from "react"
import styled from "styled-components"

// Styles
const Container = styled.div`
    
`

const Label = styled.label`
    
`

const SelectStyled = styled.select`
    
`

function Select(props) {
    return (
        <Container>
            <Label htmlFor={props.id}>
                {props.id.charAt(0).toUpperCase() + props.id.slice(1)}
            </Label>
            
            <SelectStyled onChange={props.onChange} id={props.id} name={props.id}>
                {props.options.map(option => (
                    <option value={option.value}>{option.option}</option>
                ))}
            </SelectStyled>
        </Container>
    )
}

export default Select

