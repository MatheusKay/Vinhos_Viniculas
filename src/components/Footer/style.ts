import styled from 'styled-components'

import backfooter from '../../assets/imagens/background_footer.png'
import { media, palette } from '../../styles/estiloGlobal'

export const FooterBack = styled.div`
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

  @media (max-width: ${media.mobile}) {
    padding: 24px;
  }
`

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 288px 192px auto;
  column-gap: 80px;

  @media (max-width: ${media.mobile}) {
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.h4`
  margin-bottom: 24px;
  font-size: 24px;

  @media (max-width: ${media.mobile}) {
    margin-top: 1.3em;
    text-align: center;
    font-size: 1.3em;
  }
`

export const FooterInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  border-right: 2px solid #fff;

  img {
    width: 200px;

    @media (max-width: ${media.mobile}) {
      width: 7em;
    }
  }

  @media (max-width: ${media.mobile}) {
    padding-bottom: 1.3em;
    margin-bottom: 1.3em;
    border-right: none;
    border-bottom: 2px solid ${palette.neutralColor};
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

      @media (max-width: ${media.mobile}) {
        text-decoration: underline;
      }
    }
  }
`

export const StoreDescri = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const SocialMidias = styled.div`
  margin-top: 40px;

  ul {
    display: flex;
    column-gap: 16px;

    li {
      list-style: none;

      a {
        text-decoration: none;

        svg {
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }

    @media (max-width: ${media.mobile}) {
      justify-content: center;
    }
  }
`
