// Packages
import React, { useState } from "react"

// Components
import Container from "./components/Container"
import ProductList from "./components/list/ProductList"
import SearchContainer from "./components/search/SearchContainer"

// Utils
import ConvertPrice from "./components/utils/ConvertPrice"

// Data
import products from "./data/products.json"

function App() {
    // Search in list
    const [productsList] = useState(products)
    const [query, setQuery] = useState("")

    const handleSearch = e => {
        setQuery(e.target.value)
    }

    let results = productsList.filter(product =>
        product.title.toLowerCase().includes(query)
    )

    // Filter by gender
    const [gender, setGender] = useState("all")

    const handleGenderChange = e => {
        setGender(e.target.value)
    }

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

    return (
        <Container>
            <SearchContainer
                handleSearch={handleSearch}
                handleGender={handleGenderChange}
                handleSale={filterOnSale}
            />

            {results.length > 0 ? (
                <ProductList products={results} dataLimit={100} max={max()} />
            ) : (
                <p>No results found!</p>
            )}
        </Container>
    )
}

export default App
