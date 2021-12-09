// Packages
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"
import Carousel from "./Carousel"

// Styles
const Container = styled.div`
`

const Button = styled.button`
    border: none;
    padding: ${Variables.Margins.XS} ${Variables.Margins.S};
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};
    background-color: ${Variables.Colors.Primary};
    color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.PrimaryHover}
    }
`

const ModalContent = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;

    &.Open {
        display: flex;
    }
`

const Close = styled(Icon)`
    position: absolute;
    top: 48px;
    right: 48px;
    cursor: pointer;
`

function Modal(props) {
    // Open modal
    const [open, setOpen] = useState(false)
    const Open = open ? "Open" : ""

    // Disable page scrolling when modal is open
    const [isBlocked, setIsBlocked] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("stop-scrolling", isBlocked)
    }, [isBlocked])

    // Open / close modal click function
    const handleOpen = () => {
        setOpen(!open)
        setIsBlocked(!isBlocked)
    }

    return (
        <Container>
            <Button onClick={handleOpen}>See all pictures</Button>

            <ModalContent className={Open}>
                <Close
                    name="close"
                    size={32}
                    color={Variables.Colors.White}
                    onClick={handleOpen}
                />

                <Carousel
                    image_link={props.image_link}
                    additional_image_link={props.additional_image_link}
                />
            </ModalContent>
        </Container>
    )
}

export default Modal
