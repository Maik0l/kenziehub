import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --white: #f5f5f5;
        --blue: #305AFE;
        --darkblue: #0C003D;
        --black: #000000;
        --gray: #C4C4C4;
    }

    body {
        background: var(---white);
        color: var(---black)
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Rokkitt', serif;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`