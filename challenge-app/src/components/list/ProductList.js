// Packages
import React, { useState } from "react"
// import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Components
import List from "./List"
import Card from "./Card"
import Paginator from "../pagination/Paginator"

function ProductList({ products, dataLimit }) {
    const [pages] = useState(Math.round(products.length / dataLimit))
    const [currentPage, setCurrentPage] = useState(1)

    const goToNextPage = () => {
        setCurrentPage(page => parseInt(page) + 1)
    }

    const goToPreviousPage = () => {
        setCurrentPage(page => parseInt(page) - 1)
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return products.slice(startIndex, endIndex)
    }

    const handlePaginator = e => {
        setCurrentPage(e.target.value)
    }

    return (
        <List>
            <Paginator
                onChange={handlePaginator}
                value={currentPage}
                max={pages}
                handlePrevious={goToPreviousPage}
                disablePrevious={currentPage === 1 ? "disabled" : ""}
                handleNext={goToNextPage}
                disableNext={currentPage === pages ? "disabled" : ""}
            />

            {getPaginatedData().map(product => (
                <Card product={product} key={uuid()} />
            ))}

            <Paginator
                onChange={handlePaginator}
                value={currentPage < pages ? currentPage : pages}
                max={pages}
                handlePrevious={goToPreviousPage}
                disablePrevious={currentPage === 1 ? "disabled" : ""}
                handleNext={goToNextPage}
                disableNext={currentPage === pages ? "disabled" : ""}
            />
        </List>
    )
}

export default ProductList
