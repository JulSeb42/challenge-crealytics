// Packages
import React from "react"
import styled from "styled-components"

// Components
import Search from "./Search"
import Select from "./Select"

// Styles
const Container = styled.div``

const selectOptions = ["all", "male", "female", "unisex"]

function SearchContainer(props) {
    return (
        <Container>
            <Search id="search" onChange={props.handleSearch} />
            <Select id="gender" name="gender" onChange={props.handleGender} options={selectOptions} />
        </Container>
    )
}

export default SearchContainer
