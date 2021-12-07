// Packages
import React from "react"
import styled from "styled-components"

// Styles
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 800px 1fr;
    padding: 50px 0;
`

const Content = styled.main`
    grid-column: 2;
`

function Container(props) {
    return (
        <Wrapper>
            <Content>{props.children}</Content>
        </Wrapper>
    )
}

export default Container
