import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #e7e7e7;

  > div {
    display: flex;
  }

  a {
    text-decoration: none;
  }
`

export const Logo = styled.img`
  height: 200px;
`

export const ContainerInfos = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ContainerPesquisa = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerPesquisaInput = styled.div`
  width: 80%;
  position: relative;

  input {
    width: 100%;
    padding: 8px;
    border: none;
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
  display: flex;
  align-items: end;
  gap: 8px;

  img {
    height: 30px;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  li {
  }
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
