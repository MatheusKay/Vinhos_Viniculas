import styled from 'styled-components'
import { Link } from 'react-router-dom'

import backHeader from '../../assets/imagens/background_header.png'
import { media, palette } from '../../styles/estiloGlobal'

export const HeaderContainer = styled.header`
  padding: 24px;
  background-color: ${palette.primary};
  color: ${palette.neutralColor};
  background-image: url(${backHeader});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;

  > div {
    display: flex;
    column-gap: 96px;

    @media (max-width: ${media.mobile}) {
      justify-content: space-between;
      column-gap: 0;
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: ${media.mobile}) {
    padding: 16px;
  }
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 24px;

  img {
    width: 214px;

    @media (max-width: ${media.mobile}) {
      width: 8em;
    }
  }

  h1 {
    width: 50px;
    font-size: 24px;
    color: ${palette.neutralColor};
  }
`

export const ContainerInfos = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  @media (max-width: ${media.mobile}) {
    width: auto;
    padding: 0;
    flex-direction: unset;
    row-gap: normal;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchContainerInput = styled.div`
  width: 70%;
  position: relative;

  input {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 8px;
  }

  > div {
    height: 300px;
    width: 100%;
    padding: 16px;
    position: absolute;
    top: 35px;
    left: 0;
    background-color: white;
    z-index: 1;
    overflow-y: overlay;
  }

  @media (max-width: ${media.mobile}) {
    display: none;
  }
`

export const CartContainer = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: end;
  column-gap: 16px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #fff;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;

  img {
    width: 24px;
  }

  @media (max-width: ${media.mobile}) {
    padding: 8px;

    p {
      display: none;
    }
  }
`

export const ContainerBtnMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BtnMenu = styled.button`
  padding: 0.3em;
  border: 2px solid #fff;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background-color: transparent;
`
