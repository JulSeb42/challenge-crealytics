// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Styles
const Container = styled.div`
    
`

const Button = styled.button`
    
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

    &.Open {
        display: block;
    }
`

function Modal(props) {
    const [open, setOpen] = useState(false)
    const Open = open ? "Open" : ""

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <Container>
            <Button onClick={handleOpen}>See all pictures</Button>

            <ModalContent className={Open} onClick={handleOpen}>
                
            </ModalContent>
        </Container>
    )
}

export default Modal

