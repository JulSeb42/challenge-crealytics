// Packages
import React, { useState } from "react"

// Components
import Container from "./components/Container"
import ProductList from "./components/list/ProductList"
import SearchContainer from "./components/search/SearchContainer"

// Data
import products from "./data/products.json"

function App() {
    const [productsList, setProductsList] = useState(products)
    const [query, setQuery] = useState("")

    const [gender, setGender] = useState("all")

    const handleSearch = e => {
        setQuery(e.target.value)
    }

    let results = productsList.filter(product =>
        product.title.toLowerCase().includes(query)
    )

    const handleGenderChange = e => {
        setGender(e.target.value)
    }

    if (gender !== "all") {
        results = results.filter(product => gender === product.gender)
    }

    return (
        <Container>
            <SearchContainer
                handleSearch={handleSearch}
                handleGender={handleGenderChange}
            />
            <ProductList products={results} dataLimit={100} pageLimit={20} />
        </Container>
    )
}

export default App
