// Packages
import React from "react"
import styled from "styled-components"

// Components
import Search from "./Search"
import ListSuggestions from "./ListSuggestions"
import Select from "./Select"
import Checkbox from "./Checkbox"

// Styles
const Container = styled.div``

const selectOptions = ["all", "male", "female", "unisex"]

function SearchContainer(props) {
    return (
        <Container>
            {/* Search bar */}
            <Search id="search" onChange={props.handleSearch} querySearch={props.querySearch} />

            {/* Suggestions */}
            <ListSuggestions
                suggestions={props.listSuggestions}
                open={props.handleOpenSuggestions}
                onClick={props.handleClick}
            />

            {/* Select gender */}
            <Select
                id="gender"
                name="gender"
                onChange={props.handleGender}
                options={selectOptions}
            />

            {/* Show items on sale */}
            <Checkbox
                label="Show only items on sale"
                id="sale"
                name="sale"
                onChange={props.handleSale}
            />
        </Container>
    )
}

export default SearchContainer
