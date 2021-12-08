// Packages
import React from "react"
import styled from "styled-components"

// Components
import ButtonPagination from "./ButtonPagination"

// Styles
const Container = styled.p``

const Input = styled.input``

function Paginator(props) {
    return (
        <Container>
            Page{" "}
            <Input
                type="number"
                onChange={props.onChange}
                value={props.value}
                min="1"
                max={props.max}
            />{" "}
            of {props.max}
            <ButtonPagination
                onClick={props.handlePrevious}
                prev
                disabled={props.disablePrevious}
            />
            <ButtonPagination
                onClick={props.handleNext}
                next
                disabled={props.disableNext}
            />
        </Container>
    )
}

export default Paginator
