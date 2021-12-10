import { render, screen } from "@testing-library/react"
import Page from "../components/Page"

test("renders a list of products", () => {
    render(<Page />)
    const TextRender = screen.getByText(/Weekday THURSDAY Jeans Slim Fit black/i)
    expect(TextRender).toBeInTheDocument()
})

// test("filters products list when user types in the search field", () => {
//     render(<Page />)
// })

// test("filters only products for female when clicking on 'female'", () => {
//     render(<Page />)
// })

// test("shows 100 products per page", () => {
//     render(<Page />)
// })

// test("shows products from 102 to 202 inside the second page", () => {
//     render(<Page />)
// })

// test("opens a modal when user clicks on 'See all pictures' button", () => {
//     render(<Page />)
// })