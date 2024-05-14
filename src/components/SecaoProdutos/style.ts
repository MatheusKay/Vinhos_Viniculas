import styled from 'styled-components'
import { media } from '../../styles/estiloGlobal'

export const Section = styled.section`
  color: black;
`

export const Title = styled.h2`
  margin: 56px 0;
  padding: 16px;
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 0.15em;

  @media (max-width: ${media.mobile}) {
    margin: 2em 0;
    font-size: 1.3em;
  }
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

export const ListWines = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 32px;

  @media (max-width: ${media.mobile}) {
    grid-template-columns: 1fr 1fr;
    row-gap: 4em;
  }
`
