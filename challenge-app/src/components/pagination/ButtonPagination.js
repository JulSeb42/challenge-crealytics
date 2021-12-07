// Packages
import React from "react"
import styled from "styled-components"

// Components
import Icon from "../ui/Icon"

// Styles
const Container = styled.button``

function ButtonPagination(props) {
    const conditionIcon = props.prev || props.next
    return (
        <Container {...props}>
            {conditionIcon && (
                <Icon
                    name={props.prev ? "chevron-left" : "chevron-right"}
                    size={16}
                    color="black"
                />
            )}

            {props.children && props.children}
        </Container>
    )
}

export default ButtonPagination
