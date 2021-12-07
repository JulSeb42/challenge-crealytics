// Packages
import React from "react"

// Components
import Container from "./components/Container"
import ProductList from "./components/ProductList"

// Utils
import ConvertPrice from "./components/utils/ConvertPrice"

// Data
import products from "./data/products.json"

console.log(ConvertPrice("249.95 EUR"))

function App() {
    console.log(products)

    return (
        <Container>
            <ProductList products={products} dataLimit={100} pageLimit={20} />
        </Container>
    )
}

export default App
