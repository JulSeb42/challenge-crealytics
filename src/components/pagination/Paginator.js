// Packages
import React from "react"
import styled from "styled-components"

// Components
import ButtonPagination from "./ButtonPagination"
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const Input = styled.input`
    margin: 0 ${Variables.Margins.XS};
    width: 40px;
    padding: ${Variables.Margins.XXS} ${Variables.Margins.XS};
    border: 1px solid ${Variables.Colors.LightGray};
    border-radius: ${Variables.Radiuses.S};

    &:focus {
        border-color: ${Variables.Colors.Primary};
    }

    ${"" /* Hide arrows */}
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const ButtonsContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: ${Variables.Margins.S};

    button:first-child {
        margin-right: ${Variables.Margins.XS};
    }
`

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
            <ButtonsContainer>
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
            </ButtonsContainer>
        </Container>
    )
}

export default Paginator
