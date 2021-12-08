// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import Icon from "../ui/Icon"

// Styles
const Container = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled.button``

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 90%;
    height: 100%;
    object-fit: contain;
`

function Carousel(props) {
    // Add image_link to array with all other images
    const allPictures = () => {
        let arrPictures = []

        if (props.additional_image_link[0] !== "") {
            arrPictures = [props.image_link, ...props.additional_image_link]
        }

        return arrPictures
    }

    // Set active image
    const [active, setActive] = useState(0)

    // Navigate through images
    const handlePrev = () =>
        setActive(active !== 0 ? active - 1 : allPictures().length - 1)
    const handleNext = () =>
        setActive(active !== allPictures().length - 1 ? active + 1 : 0)

    return allPictures().length > 0 ? (
        <Container>
            <Button onClick={handlePrev}>
                <Icon name="chevron-left" color="black" size={32} />
            </Button>

            <Content>
                {allPictures().map((image, i) => (
                    <Img
                        src={image}
                        alt="Product image"
                        style={{ display: active === i ? "inline" : "none" }}
                        key={i}
                    />
                ))}
            </Content>

            <Button onClick={handleNext}>
                <Icon name="chevron-right" color="black" size={32} />
            </Button>
        </Container>
    ) : (
        <Img src={props.image_link} alt="Product image" />
    )
}

export default Carousel
