import { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #EEE;
    font-family: sans-serif;
  }

  .container {
    max-width: 1184px;
    width: 100%;
    margin: 0 auto;
  }

  .slick-prev {
    left: 25px;
    z-index: 1;
  }

  .slick-next {
    right: 25px;
  }

  .slick-dots {
    li {
      display: none;
    }
  }
}
`
