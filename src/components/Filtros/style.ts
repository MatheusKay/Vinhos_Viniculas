import styled from 'styled-components'

import backHeader from '../../assets/imagens/background_header.png'

import { media, palette } from '../../styles/estiloGlobal'

export const FiltrosContainer = styled.aside`
  padding: 24px 80px;
  margin-bottom: 32px;
  background-color: ${palette.tertiary};
  background-image: url(${backHeader});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: color-burn;
  border-radius: 8px;
  color: ${palette.neutralColor};

  .btn_active {
    background-color: ${palette.neutralColor};
    color: ${palette.tertiary};
  }

  h3 {
    padding-bottom: 16px;
    margin-bottom: 16px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    border-bottom: 2px solid ${palette.neutralColor};
  }

  @media (max-width: ${media.mobile}) {
    padding: 24px;
  }

  @media (max-width: ${media.desktop}) {
    padding: 32px;
  }
`

export const FiltrosSelects = styled.div`
  display: grid;
  grid-template-columns: 248px 248px;
  align-items: center;
  column-gap: 40px;

  h4 {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  @media (max-width: ${media.mobile}) {
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`
