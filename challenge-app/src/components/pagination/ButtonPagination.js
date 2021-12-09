// Packages
import React from "react"
import styled from "styled-components"

// Components
import Icon from "../ui/Icon"
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.button`
    border: none;
    background-color: ${Variables.Colors.LighterGray};
    --size: 32px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: ${Variables.Transitions.Short};

    svg path {
        transition: ${Variables.Transitions.Short};
    }

    &:hover {
        background-color: ${Variables.Colors.PrimaryHover};

        svg path {
            fill: ${Variables.Colors.White};
        }
    }

    &:disabled {
        background-color: transparent;
        cursor: not-allowed;

        &:hover {
            background-color: transparent;

            svg path {
                fill: ${Variables.Colors.Gray};
            }
        }
    }
`

function ButtonPagination(props) {
    return (
        <Container {...props}>
            <Icon
                name={props.prev ? "chevron-left" : "chevron-right"}
                size={16}
                color={
                    props.disabled
                        ? Variables.Colors.Gray
                        : Variables.Colors.Primary
                }
            />
        </Container>
    )
}

export default ButtonPagination
