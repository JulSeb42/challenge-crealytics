// Packages
import React from "react"
import styled from "styled-components"

// Utils
import ConvertPrice from "../utils/ConvertPrice"
import ArrayAdditional from "../utils/ArrayAdditional"
import Modal from "./Modal"

const Container = styled.div`
    width: 100%;
    border: 1px solid lightgray;
    padding: 8px;
    display: flex;
    align-items: center;
`

const Img = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 16px;
`

const Content = styled.span``

// title, gtin, gender, the two prices (price and sale_price) together with a thumbnail of the image_link

function Card({ product }) {
    // const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Container>
            <Img src={product.image_link} alt={product.title} />

            <Content>
                <h4>{product.title}</h4>

                <p>Gtin: {product.gtin}</p>

                <p>
                    Gender:{" "}
                    {product.gender === "male"
                        ? "Male"
                        : product.gender === "female"
                        ? "Female"
                        : "Unisex"}
                </p>

                <p>Price: {product.price}</p>

                {ConvertPrice(product.sale_price) <
                    ConvertPrice(product.price) && (
                    <p>Sale price: {product.sale_price}</p>
                )}

                <Modal />

                {/* {product.additional_image_link &&
                    ArrayAdditional(product.additional_image_link).map(
                        image => <img src={image} alt="" />
                    )} */}
            </Content>
        </Container>
    )
}

export default Card
