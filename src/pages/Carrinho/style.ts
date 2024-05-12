import styled from 'styled-components'

import backHeader from '../../assets/imagens/background_header.png'

import { palette } from '../../styles/estiloGlobal'

export const Cart = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  .overlay {
    width: 70%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const AsideCart = styled.aside`
  width: 30%;
  height: 100vh;
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${palette.neutralColor};
  background-image: url(${backHeader});
  background-size: cover;
  background-repeat: round;
  background-blend-mode: multiply;

  .text_subTitle {
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;

    span {
      color: ${palette.primary};
    }
  }

  .cards_list {
    height: 60%;
    overflow-y: overlay;
  }
`

export const HeaderCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header_cart_name {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  h3 {
    font-size: 16px;

    svg {
      fill: ${palette.blackColor};
    }
  }

  button {
    padding: 8px;
    display: flex;
    border: 2px solid ${palette.blackColor};
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: ${palette.blackColor};

      svg {
        fill: ${palette.neutralColor};
      }
    }
  }
`

export const CardCart = styled.li`
  padding: 24px;
  margin-bottom: 16px;
  display: flex;
  column-gap: 32px;
  border: 2px solid ${palette.blackColor};
  border-radius: 16px;

  img {
    height: 120px;
  }

  .card_infos {
    width: 100%;
  }

  h4 {
    margin-bottom: 12px;
    font-size: 14px;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
  }
`

export const CardTags = styled.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 12px;

  span {
    padding: 6px;
    text-align: center;
    font-size: 12px;
    background-color: ${palette.grayColor};
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    padding: 8px;
    background-color: transparent;
    border: 1px solid ${palette.primary};
    border-radius: 8px;
    cursor: pointer;

    svg {
      fill: ${palette.primary};
    }

    &:hover {
      background-color: ${palette.primary};

      svg {
        fill: ${palette.neutralColor};
      }
    }
  }
`

export const CardSelect = styled.div`
  border: 1px solid ${palette.blackColor};
  border-radius: 6px;

  .card_select_left {
    border-right: 1px solid ${palette.blackColor};
  }

  .card_select_right {
    border-left: 1px solid ${palette.blackColor};
  }

  button {
    padding: 8px;
    color: ${palette.blackColor};
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background-color: ${palette.blackColor};
      color: ${palette.grayColor};
    }
  }

  span {
    padding: 8px 12px;
    font-size: 16px;
  }
`

export const AsideCartFooter = styled.div`
  .sub_title_price {
    margin-bottom: 8px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  .sub_text_frete {
    font-size: 12px;
    font-weight: 600;

    span {
      color: ${palette.secondary};
    }
  }
`

export const BtnBuy = styled.button`
  width: 100%;
  padding: 8px 16px;
  margin-top: 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: ${palette.neutralColor};
  background-color: ${palette.primary};
  cursor: pointer;

  &:hover {
    background-color: ${palette.tertiary};
  }
`
