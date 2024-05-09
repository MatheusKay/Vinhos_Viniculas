import styled from 'styled-components'

import backHeader from '../../assets/imagens/background_header.png'

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
  background-color: #fff;
  background-image: url(${backHeader});
  background-size: cover;
  background-repeat: round;
  background-blend-mode: multiply;

  .header_cart {
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
        fill: #000;
      }
    }

    button {
      padding: 8px;
      border: 2px solid #000;
      border-radius: 8px;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        background-color: #000;

        svg {
          fill: #fff;
        }
      }
    }
  }

  .text_subTitle {
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;

    span {
      color: #dc143c;
    }
  }

  .cards_list {
    height: 60%;
    overflow-y: overlay;
  }
`

export const CardCart = styled.li`
  padding: 24px;
  margin-bottom: 16px;
  display: flex;
  column-gap: 32px;
  border: 2px solid #000;
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

  .card_tags {
    margin-bottom: 16px;
    display: flex;
    column-gap: 12px;

    span {
      padding: 6px;
      text-align: center;
      font-size: 12px;
      background-color: #d9d9d9;
    }

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }

  h3 {
    margin-bottom: 8px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
  }

  .card_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
      padding: 8px;
      background-color: transparent;
      border: 1px solid #dc143c;
      border-radius: 8px;
      cursor: pointer;

      svg {
        fill: #dc143c;
      }

      &:hover {
        background-color: #dc143c;

        svg {
          fill: #fff;
        }
      }
    }
  }

  .card_select {
    border: 1px solid #000;
    border-radius: 6px;

    .card_select_left {
      border-right: 1px solid #000;
    }

    .card_select_right {
      border-left: 1px solid #000;
    }

    button {
      padding: 8px;
      color: #000;
      background-color: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;

      &:hover {
        background-color: #000;
        color: #d9d9d9;
      }
    }

    span {
      padding: 8px 12px;
      font-size: 16px;
    }
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
      color: #518c16;
    }
  }

  .btn_compra {
    width: 100%;
    padding: 8px 16px;
    margin-top: 24px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #dc143c;
    cursor: pointer;

    &:hover {
      color: #dc143c;
      background-color: #fff;
      border-color: #dc143c;
    }
  }
`
