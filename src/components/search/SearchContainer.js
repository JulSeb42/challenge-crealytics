// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Search from "./Search"
import ListSuggestions from "./ListSuggestions"
import Toggle from "./Toggle"
import Selector from "./Selector"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.M};
`

const SearchInput = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
`

const GenderContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

const SelectorsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span:not(:last-child) {
        margin-right: ${Variables.Margins.XS};
    }
`

const selectOptions = ["all", "male", "female", "unisex"]

function SearchContainer(props) {
    const [open, setOpen] = useState(false)
    const openClass = open ? "open" : ""

    return (
        <Container>
            <SearchInput>
                {/* Search bar */}
                <Search
                    id="search"
                    onChange={props.handleSearch}
                    querySearch={props.querySearch}
                    onFocus={() => setOpen(true)}
                    onBlur={() => setTimeout(setOpen(false), 500)}
                />

                {/* Suggestions */}
                <ListSuggestions
                    suggestions={props.listSuggestions}
                    open={openClass}
                    onMouseDown={props.handleClickSuggestions}
                />
            </SearchInput>

            {/* Show items on sale */}
            <Toggle
                label="Show only items on sale"
                id="sale"
                name="sale"
                onChange={props.handleSale}
            />

            {/* Select gender */}
            <GenderContainer>
                <h4>Filter by gender</h4>

                <SelectorsContainer>
                    {selectOptions.map(option => (
                        <Selector
                            id={option}
                            name="gender"
                            onChange={props.handleGender}
                            label={
                                option.charAt(0).toUpperCase() + option.slice(1)
                            }
                            value={option}
                            defaultChecked={option === "all" ? true : false}
                            key={option}
                        />
                    ))}
                </SelectorsContainer>
            </GenderContainer>
        </Container>
    )
}

export default SearchContainer
