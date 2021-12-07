// Packages
import React from "react"
import styled from "styled-components"

// Components
import ButtonPagination from "./ButtonPagination"

// Styles
const Container = styled.div`
    
`

function Pagination(props) {
    return (
        <Container>
            <ButtonPagination
                onClick={props.handlePrevious}
                prev
                disabled={props.disablePrevious}
            />

            {props.children}

            <ButtonPagination
                onClick={props.handleNext}
                next
                disabled={props.disableNext}
            />
        </Container>
    )
}

export default Pagination

