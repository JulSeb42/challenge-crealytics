// Packages
import React from "react"
import styled from "styled-components"

// Components
import Search from "./Search"

// Styles
const Container = styled.div`
    
`

function SearchContainer(props) {
    return (
        <Container>
            <Search id="search" onChange={props.handleSearch} />
        </Container>
    )
}

export default SearchContainer

