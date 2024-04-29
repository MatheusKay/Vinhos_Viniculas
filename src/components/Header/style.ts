import styled from 'styled-components'
import { Link } from 'react-router-dom'

import backHeader from '../../assets/imagens/background_header.png'

export const HeaderContainer = styled.header`
  padding: 24px;
  background-color: #dc143c;
  color: #fff;
  background-image: url(${backHeader});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;

  > div {
    display: flex;
    column-gap: 96px;
  }

  a {
    text-decoration: none;
  }
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 24px;

  img {
    width: 96px;
  }

  h1 {
    width: 50px;
    font-size: 24px;
    color: #fff;
  }
`

export const ContainerInfos = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  row-gap: 36px;
`

export const ContainerPesquisa = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContainerPesquisaInput = styled.div`
  width: 70%;
  position: relative;

  input {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 8px;
  }

  > div {
    width: 100%;
    padding: 16px;
    position: absolute;
    top: 35px;
    left: 0;
    background-color: white;
    z-index: 1;
  }
`

export const ContainerCarrinho = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: end;
  column-gap: 16px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #fff;
  border-radius: 8px;

  a {
    color: #fff;
  }

  img {
    width: 24px;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 16px;
  font-weight: 700;
`
export const LinkR = styled(Link)`
  color: #fff;
`

export const LinkDown = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  a {
    margin-right: 8px;
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  > div {
    width: 200px;
    position: absolute;
    top: 24px;
    left: 0;
    background-color: white;
    z-index: 1;
  }
`
