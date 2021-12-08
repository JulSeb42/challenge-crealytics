// Packages
import React, { useState } from "react"
// import styled from "styled-components"
import { v4 as uuid } from "uuid"

// Components
import List from "./List"
import Card from "./Card"
import Paginator from "../pagination/Paginator"

function ProductList({ products, dataLimit, max }) {
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

    const PaginatorOptions = () => {
        return (
            <Paginator
                onChange={handlePaginator}
                value={currentPage}
                max={max}
                handlePrevious={goToPreviousPage}
                disablePrevious={currentPage === 1 ? "disabled" : ""}
                handleNext={goToNextPage}
                disableNext={currentPage === max ? "disabled" : ""}
            />
        )
    }

    return (
        <List>
            <PaginatorOptions />
            
            {getPaginatedData().map(product => (
                <Card product={product} key={uuid()} />
            ))}

            <PaginatorOptions />
        </List>
    )
}

export default ProductList
