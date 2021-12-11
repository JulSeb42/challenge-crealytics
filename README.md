# Challenge

## Run the app

If you want to open the app for the first time, open this folder in your terminal and run `npm install`. Then run `npm start` to open a local server at [http://localhost:3000/](http://localhost:3000/).

If you do not have npm installed on your machine, you can download it here: [https://nodejs.org/](https://nodejs.org/) (this will install Node and npm on your computer).

## Build app

To build and deploy the app, open the folder in the terminal and run `npm run build`.

## Structure

To structure this app, I followed the principles of Atomic design (and the magic of React), where all the components are divided into smaller ones. In the case we want to implement more pages, I decided to have in the `App.js` file only the global components, and have the rest inside the `Page` component. 

## Use data

To display the data, first convert the `.csv` file to a `.json` file. You can find a converter here: [https://csvjson.com/](https://csvjson.com/). Then, import the json file in the page `src/components/Page.js`:

```
import products from "../data/products.json"
```

Do not forget to import the `ProductList` component in your `Page.js`:

```
import ProductList from "./list/ProductList"
```

You can now display a list of all the products in the JSX:

```
<ProductList products={products} dataLimit={100} max={max()} />
```

Here, the `dataLimit` attribute controls how many products are displayed on each pages. The `max()` function calculates the maximum number of pages. For a better user experience, and because the product list contains around 20k products, the pagination is using an input for the page number and buttons to navigate.

If there are errors in the gender values, the products will be displayed as `unisex`.

## Search and filtering

All the logic for search and filtering can be found in the `Page` component, and in the `search/SearchContainer` component for the suggestions.

For gender filtering, the app is using radio buttons instead of a dropdown to get a better user experience.

## Autocomplete feature

This app has an autocomplete feature when users type in the search field. For better performances, the list of suggestions display only the first 20 results. You can edit this by going to the `Page` component, and edit this value:

```
const maxSuggestions = 20
```

## Fetch images asynchronously

For better performances, images are fetched asynchronously. If you want to add images, you can use the component `utils/AsyncImage`.

## Display expanded images

Each product card contains a modal which can be opened on a click. The logic for this feature is in the component `list/Modal.js`. When clicked, the buttons disable scrolling inside the page's `body`, and opens either a carousel (when the product has more than one image), or the only image of the product. 

## Utils

Inside the `components/utils` folder, you can find several functions:

### ArrayAdditional

This function transforms the string for `additional_image_link` into an array of links.

### AsyncImage

The logic for fetching images asynchronously.

### ConvertPrice

This function is used to calculate if the `sale_price` value is lower than the `price`. 

### Helmet

This component is used for the `<head>` of the website, and uses the package React Helmet ([https://www.npmjs.com/package/react-helmet](https://www.npmjs.com/package/react-helmet)).

## Testing

To run tests, run `npm run test` in your terminal. This app is using [Jest](https://jestjs.io/) and [Puppeteer](https://pptr.dev/) as testing libraries. All the tests can be found inside the page `src/tests/App.test.js`.

## Styles

This app uses Styled Components for styling, you can find the documentation here: [https://styled-components.com/](https://styled-components.com/).

### CSS file

The only CSS file in the app is `index.css`, which is used only as a reset.

### Variables

All the variables for colors, fonts, etc., are stored inside the file `styles/Variables.js`. You can edit them there, and import the file in other components like this:

```
import * as Variables from "./styles/Variables"
```

Now you can use these variables. For example, if you want to use them in a styled-component:

```
const Button = styled.button`
    background-color: ${Variables.Colors.Primary};
`
```

### Global styles

The app is using styled-components `createGlobalStyle` inside the component `styles/GlobalStyles`. Use this file only for general styling, like for `html`, `body`, etc. Do not add components styles there, as you should have them in the components pages. 

## Other dependencies

### react-svg

This package is used to import SVG elements inside our JSX. For example, this app is using it for icons:

```
<Icon name="chevron-left" color={Variables.Colors.White} size={32} />
```

Here, the `name` attribute is the name of the SVG file (without `.svg`), the `color` is from the `Variables` file, and the `size` has to be an integer. If you want to add icons to the app, download icons from [https://boxicons.com/](https://boxicons.com/) and put them in the folder `public/icons`. 

### uuid

This package generates keys for maping lists, as React sends errors if there's no keys. It can be used like this:

```
{list.map(item => <li key={uuid()}>{item}</li>)}
```