// Packages
import React from "react"
import styled from "styled-components"

// Components
import ButtonPagination from "./ButtonPagination"

// Styles
const Container = styled.div``

const Input = styled.input``

const Active = styled.p``

function Paginator(props) {
    return (
        <Container>
            <Input
                type="number"
                onChange={props.onChange}
                value={props.value}
                min="1"
                max={props.max}
            />

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

            <Active>
                Page {props.value} of {props.max}
            </Active>
        </Container>
    )
}

export default Paginator
