import styled from 'styled-components'
import { media, palette } from '../../styles/estiloGlobal'

export const SectionInfos = styled.section`
  margin-bottom: 15%;

  h2 {
    margin-top: 56px;
    text-align: center;
    font-size: 32px;
    letter-spacing: 0.32em;
    color: #303030;
  }

  p {
    width: 80%;
    margin: 64px auto 56px auto;
    font-size: 14px;
    line-height: 22px;
    text-align: center;

    @media (max-width: ${media.mobile}) {
      width: 100%;
      margin: 64px 0 56px 0;
    }
  }
`

export const Poster = styled.section`
  position: relative;
  color: ${palette.neutralColor};

  > img {
    width: 100%;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 40px;
    position: absolute;
    top: 0;
    left: 0;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
      font-weight: 600;
    }

    img {
      width: 104px;
    }

    @media (max-width: ${media.mobile}) {
      img {
        width: 4em;
      }

      h2 {
        font-size: 1.3em;
      }

      p {
        width: 85%;
        text-align: center;
        font-size: 0.9em;
      }
    }

    @media (max-width: ${media.tablet}) {
      img {
        width: 4em;
      }
    }
  }

  @media (max-width: ${media.mobile}) {
    > img {
      height: 18em;
    }
  }
`

export const ContainerImg = styled.div`
  width: 100%;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;

  img {
    width: 180px;
    height: 360px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 16px;

    @media (max-width: ${media.tablet}) {
      width: 100%;
    }
  }

  > div {
    position: relative;
    margin: 0 auto;
  }

  @media (max-width: ${media.mobile}) {
    display: none;
  }

  @media (max-width: ${media.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;

  .ball_small {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${palette.tertiary};
  }

  .ball_medium {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${palette.primary};
  }

  .ball_big {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${palette.tertiary};
  }
`
