// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Modal from "./Modal"
import AsyncImage from "../utils/AsyncImage"

// Utils
import ConvertPrice from "../utils/ConvertPrice"
import ArrayAdditional from "../utils/ArrayAdditional"

const Container = styled.div`
    width: 100%;
    border: 1px solid ${Variables.Colors.LightGray};
    padding: ${Variables.Margins.XS};
    display: flex;
    align-items: center;
    border-radius: ${Variables.Radiuses.M};

    @media ${Variables.Breakpoints.MobileL} {
        flex-direction: column;
    }
`

const Img = styled(AsyncImage)`
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: ${Variables.Margins.M};

    @media ${Variables.Breakpoints.MobileL} {
        margin-right: 0;
        margin-bottom: ${Variables.Margins.M};
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-grow: 1;
    height: 100%;
`

const Col = styled.div`
    &.col-price {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        flex-direction: column;
    }
`

const Price = styled.strong`
    color: ${Variables.Colors.Primary};
`

const Crossed = styled.span`
    font-weight: ${Variables.FontWeights.Regular};
    color: ${Variables.Colors.Black};
    text-decoration: line-through;
`

function Card({ product }) {
    return (
        <Container className="card">
            {product.number}
            <Img src={product.image_link} alt={product.title} />

            <Content>
                <Col>
                    <h4>{product.title}</h4>

                    <p>Gtin: {product.gtin}</p>

                    <p>
                        {/* Transform error in gender to unisex */}
                        Gender:{" "}
                        {product.gender === "male"
                            ? "Male"
                            : product.gender === "female"
                            ? "Female"
                            : "Unisex"}
                    </p>
                </Col>

                <Col className="col-price">
                    <Price>
                        {ConvertPrice(product.sale_price) <
                        ConvertPrice(product.price) ? (
                            <>
                                <Crossed>{product.price}</Crossed>{" "}
                                {product.sale_price}
                            </>
                        ) : (
                            product.price
                        )}
                    </Price>

                    <Modal
                        image_link={product.image_link}
                        additional_image_link={ArrayAdditional(
                            product.additional_image_link
                        )}
                    />
                </Col>
            </Content>
        </Container>
    )
}

export default Card
