import styled from 'styled-components'

import backHeader from '../../assets/imagens/background_header.png'

export const FiltrosContainer = styled.aside`
  padding: 24px 80px;
  margin-bottom: 32px;
  background-color: #6b0d2f;
  background-image: url(${backHeader});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: color-burn;
  border-radius: 8px;
  color: #fff;

  .btn_active {
    background-color: #fff;
    color: #6b0d2f;
  }

  h3 {
    padding-bottom: 16px;
    margin-bottom: 16px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    letter-spacing: 0.15em;
    border-bottom: 2px solid #fff;
    font-family: Montserrat;
  }

  h4 {
    margin-bottom: 16px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }
`

export const FiltrosSelects = styled.div`
  display: grid;
  grid-template-columns: 248px 248px;
  align-items: center;
  column-gap: 40px;
`
