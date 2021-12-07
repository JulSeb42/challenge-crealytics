// Packages
import React, { useState } from "react"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Components
import List from "./List"
import Card from "./Card"
import Pagination from "./pagination/Pagination"
import ButtonPagination from "./pagination/ButtonPagination"

function ProductList({ products, RenderComponent, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(products.length / dataLimit))
    const [currentPage, setCurrentPage] = useState(1)

    const goToNextPage = () => {
        setCurrentPage(page => page + 1)
    }

    const goToPreviousPage = () => {
        setCurrentPage(page => page - 1)
    }

    const changePage = e => {
        setCurrentPage(Number(e.target.textContent))
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return products.slice(startIndex, endIndex)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit).fill().map((_, i) => start + i + 1)
    }

    return (
        <List>
            {getPaginatedData().map(product => (
                <Card product={product} key={uuid()} />
            ))}

            <Pagination
                handlePrevious={goToPreviousPage}
                disablePrevious={currentPage === 1 ? "disabled" : ""}
                handleNext={goToNextPage}
                disableNext={currentPage === pages ? "disabled" : ""}
            >
                {getPaginationGroup().map(number => (
                    <ButtonPagination
                        onClick={changePage}
                        className={currentPage === number ? "active" : ""}
                    >
                        {number}
                    </ButtonPagination>
                ))}
            </Pagination>
        </List>
    )
}

export default ProductList
