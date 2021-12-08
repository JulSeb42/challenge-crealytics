// Packages
import React from "react"
import styled from "styled-components"

// Components
import Icon from "../ui/Icon"

// Styles
const Container = styled.button``

function ButtonPagination(props) {
    return (
        <Container {...props}>
            <Icon
                name={props.prev ? "chevron-left" : "chevron-right"}
                size={16}
                color="black"
            />
        </Container>
    )
}

export default ButtonPagination
