import styled, { createGlobalStyle } from 'styled-components'

export const palette = {
  primary: '#dc143c',
  secondary: '#518c16',
  tertiary: '#6b0d2f',
  neutralColor: '#fff',
  grayColor: '#9a9a9a',
  blackColor: '#000'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Vollkorn", serif;
    }

    .pagination__button--active {
      background-color: ${palette.secondary};
      border-color: ${palette.secondary};
      color: ${palette.neutralColor};
    }
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

export const ImgDiv = styled.img`
  width: 100%;
  margin-top: 80px;
`
