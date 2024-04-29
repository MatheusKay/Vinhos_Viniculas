import styled from 'styled-components'

import backfooter from '../../assets/imagens/background_footer.png'

export const FooterColor = styled.div`
  padding: 48px;
  margin-top: 128px;
  background-color: #6b0d2f;
  background-image: url(${backfooter});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  color: #fff;

  a {
    color: #fff;
    font-size: 14px;
  }
`

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 288px 192px auto;
  column-gap: 80px;
`

export const Titulo = styled.h4`
  margin-bottom: 24px;
  font-size: 24px;
`

export const FooterInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  border-right: 2px solid #fff;

  img {
    width: 96px;
  }
`

export const FooterLinks = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`

export const Links = styled.ul`
  li {
    margin-bottom: 8px;
    list-style: none;

    a {
      padding: 8px 8px 8px 0;
      text-decoration: none;
    }
  }
`

export const DescLoja = styled.p`
  font-size: 12px;
  line-height: 22px;
`

export const LinksSociais = styled.div`
  margin-top: 40px;

  ul {
    display: flex;
    column-gap: 16px;

    li {
      list-style: none;

      a {
        text-decoration: none;
      }
    }
  }
`
