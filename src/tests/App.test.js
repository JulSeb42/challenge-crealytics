import puppeteer from "puppeteer"

describe("App.js", () => {
    let browser
    let page

    beforeAll(async () => {
        browser = await puppeteer.launch()
        page = await browser.newPage()
    })

    it("renders a list of products", async () => {
        await page.goto("http://localhost:3000")
        await page.waitForSelector(".sc-dkPtRN.gfYDln")
        const text = await page.$eval(".sc-dkPtRN.gfYDln", e => e.textContent)
        expect(text).toContain("Weekday THURSDAY Jeans Slim Fit black")
    })

    it("filters products list when user types in the search field", async () => {
        await page.goto("http://localhost:3000")
        await page.type("#search", "sal")
        const input = await page.$eval(".max", e => e.textContent)
        expect(input).toEqual("1")
    })

    it("filters only products for female when clicking on 'female'", async () => {
        await page.goto("http://localhost:3000")

        await page.evaluate(() => {
            let radio = document.querySelector("#female")
            radio.click()
        })

        const list = await page.$eval(".sc-dkPtRN.gfYDln", e => e.textContent)
        expect(list).not.toContain("Gender: Male")
    })

    it("shows 100 products per page", async () => {
        await page.goto("http://localhost:3000")

        let pageElements = await page.evaluate(() => {
            let elements = document.getElementsByClassName("card")
            return elements.length
        })

        expect(pageElements).toEqual(100)
    })

    afterAll(() => browser.close())
})
