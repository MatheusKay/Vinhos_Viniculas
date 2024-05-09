import styled from 'styled-components'

export const Secao = styled.section`
  color: black;
`

export const Titulo = styled.h2`
  margin: 56px 0;
  padding: 16px;
  text-align: center;
  font-size: 32px;
  letter-spacing: 0.15em;
`

export const Links = styled.ul`
  margin-top: 24px;
  display: flex;
  justify-content: center;

  li {
    margin-right: 16px;
    list-style: none;

    a {
      padding: 8px;
      text-decoration: none;
    }
  }
`

export const ListaVinhos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 32px;
`
