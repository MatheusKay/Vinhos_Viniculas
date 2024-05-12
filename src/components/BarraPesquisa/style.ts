import styled from 'styled-components'

import { palette } from '../../styles/estiloGlobal'

export const CardSuggestions = styled.div`
  padding: 8px;
  color: ${palette.primary};

  h4 {
    width: 300px;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
  }
`

export const ListSuggestions = styled.ul`
  margin-top: 24px;

  li {
    display: flex;
    align-items: center;
    column-gap: 16px;
    list-style: none;
    margin-bottom: 16px;
    font-size: 14px;
    cursor: pointer;

    .text_price {
      text-align: right;
      font-size: 12px;
      font-weight: 500;
      color: ${palette.secondary};
    }
  }
`

export const Card = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  div {
    position: absolute;
    top: 0;
    right: 0;

    .img_country {
      width: 24px;
    }
  }

  .img_wine {
    max-height: 64px;
    height: 100%;
  }

  span {
    width: 80px;
  }
`
