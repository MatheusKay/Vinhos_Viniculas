import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #EEE;
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
      background-color: #518C16;
      border-color: #518C16;
      color: #fff;
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

// ads
// asdsdsdsdasd
// sd
// asd
// as
// das
// dasdasdsds
// d
// sdasd
// asd
// das

// dd
// sad
// a
// sd
// asd
