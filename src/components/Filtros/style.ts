import styled from 'styled-components'

import backHeader from '../../assets/imagens/background_header.png'

export const FiltrosContainer = styled.aside`
  padding: 32px;
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

  .section_filtro {
    margin-bottom: 64px;
  }

  h3 {
    padding-bottom: 24px;
    margin-bottom: 24px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    letter-spacing: 0.15em;
    border-bottom: 2px solid #fff;
    font-family: Montserrat;
  }

  h4 {
    margin-bottom: 32px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }
`

export const Botao = styled.button`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 2px solid #fff;
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`

export const BotaoPais = styled.div`
  display: flex;
  justify-content: space-between;

  ${Botao} {
    padding: 10px;
    border-radius: 4px 0 0 4px;
    border-right: none;
  }

  img {
    width: 39px;
    height: 39px;
    border-radius: 0 4px 4px 0;
  }
`
