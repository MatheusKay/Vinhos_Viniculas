import styled from 'styled-components'

export const FooterColor = styled.div`
  padding: 16px;
  margin-top: 56px;
  background-color: #ccc;
`

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 261px 261px auto;
`

export const Titulo = styled.h4`
  margin-bottom: 24px;
  text-align: center;
  font-size: 18px;
`
export const Links = styled.ul`
  li {
    margin-bottom: 8px;

    a {
      padding: 8px;
      text-decoration: none;
    }
  }
`

export const DescLoja = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const LinksSociais = styled.div`
  width: 35%;
  margin: 24px auto;

  ul {
    display: flex;
    justify-content: space-evenly;

    li {
      list-style: none;

      a {
        padding: 8px;
        text-decoration: none;
      }
    }
  }
`
