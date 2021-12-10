// Packages
import React, { useState } from "react"

// Components
import Container from "./Container"
import ProductList from "./list/ProductList"
import SearchContainer from "./search/SearchContainer"

// Utils
import ConvertPrice from "./utils/ConvertPrice"

// Data
import products from "../data/products.json"

function Page() {
    // Search in list
    const [productsList] = useState(products)
    const [query, setQuery] = useState("")

    const handleSearch = e => {
        setQuery(e.target.value)
    }

    let results = productsList.filter(product =>
        product.title.toLowerCase().includes(query)
    )

    const handleClickSuggestions = e => {
        setQuery(e.target.innerText.toLowerCase())
    }

    // Filter by gender
    const [gender, setGender] = useState("all")

    const handleGenderChange = e => {
        setGender("all")
        setGender(e.target.value)
    }

    console.log(gender)

    if (gender !== "all") {
        results = results.filter(product => gender === product.gender)
    }

    // Show only items on sale
    const [sale, setSale] = useState(false)

    const filterOnSale = e => {
        setSale(e.target.checked)
    }

    if (sale) {
        results = results.filter(
            product =>
                ConvertPrice(product.sale_price) < ConvertPrice(product.price)
        )
    }

    // Calculate max pages, and prevent having 0 as number of pages
    const max = () => {
        const calculateMax = Math.round(results.length / 100)

        return calculateMax !== 0 ? calculateMax : 1
    }

    // Limit the number of results in the suggestions list
    const maxSuggestions = 20

    // results = results.filter(product => product.additional_image_link === "")

    return (
        <Container>
            <h1>Our products</h1>

            <SearchContainer
                handleSearch={handleSearch}
                handleGender={handleGenderChange}
                handleSale={filterOnSale}
                listSuggestions={results.slice(0, maxSuggestions)}
                handleClickSuggestions={handleClickSuggestions}
                querySearch={query}
            />

            {results.length > 0 ? (
                <ProductList products={results} dataLimit={100} max={max()} />
            ) : (
                <p>No results found!</p>
            )}
        </Container>
    )
}

export default Page
