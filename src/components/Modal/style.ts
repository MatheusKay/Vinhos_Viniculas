import styled from 'styled-components'
import { media, palette } from '../../styles/estiloGlobal'

export const ModalContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
`

export const CardModal = styled.section`
  min-width: 500px;
  padding: 32px;
  display: flex;
  column-gap: 16px;
  position: relative;
  background-color: ${palette.neutralColor};
  border-radius: 16px;

  .img_wine {
    height: 280px;
  }

  @media (max-width: ${media.tablet}) {
    min-width: unset;
    width: 80%;
  }
`

export const CloseModal = styled.div`
  position: absolute;
  top: -48px;
  right: 0;

  button {
    padding: 8px;
    display: flex;
    border: 2px solid ${palette.grayColor};
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;

    svg {
      fill: ${palette.grayColor};
    }

    &:hover {
      background-color: ${palette.grayColor};

      svg {
        fill: ${palette.blackColor};
      }
    }
  }
`

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    max-width: 400px;
    width: 100%;
  }

  .infos_card {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .infos_header {
      display: flex;
      align-items: start;
      justify-content: space-between;
    }

    .infos_tags {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      column-gap: 12px;

      span {
        padding: 8px;
        text-align: center;
        font-size: 14px;
        background-color: ${palette.secondary};
        color: ${palette.neutralColor};
        border-radius: 8px;
      }

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }

    p {
      font-size: 16px;
      font-weight: 600;

      svg {
        fill: ${palette.blackColor};
      }
    }
`

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  button {
    width: 50%;
    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: ${palette.primary};
    color: ${palette.neutralColor};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`
