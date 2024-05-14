import styled from 'styled-components'
import { media, palette } from '../../styles/estiloGlobal'

type Props = {
  isInverted: boolean
}

export const ContainerWinery = styled.div<Props>`
  margin-bottom: 15%;
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isInverted ? 'row-reverse' : 'row')};
  gap: 24px;

  img {
    border-radius: 16px;
  }

  @media (max-width: ${media.mobile}) {
    margin: 20% 0;
    flex-direction: column-reverse;
    row-gap: 3em;
  }
`

export const ContainerPoster = styled.div`
  max-width: 550px;
  width: 320px;
  transition: width 1.5s ease-in-out;
  border-radius: 16px;

  &:hover {
    width: 100%;
    transition: width 1.5s ease-in-out;
  }

  @media (max-width: ${media.mobile}) {
    max-width: unset;
    width: 100%;
  }
`

export const ContainerInfos = styled.div<Props>`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .text_desc {
    margin-top: 48px;
    font-size: 14px;
    line-height: 20px;
  }

  .text_num {
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: ${(props) => (props.isInverted ? 'row-reverse' : 'row')};

    span {
      padding: 12px;
      font-size: 24px;
      font-weight: 600;
      background-color: ${palette.primary};
      border-radius: 8px;
      color: ${palette.neutralColor};
    }

    @media (max-width: ${media.mobile}) {
      margin-bottom: 2em;
      flex-direction: row-reverse;
      justify-content: flex-end;
      column-gap: 16px;
    }
  }
`

export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 24px;
`

export const WineryInfos = styled.div<Props>`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  div {
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.isInverted ? 'row' : 'row-reverse')};
    column-gap: 20px;

    span {
      width: 50px;
      height: 45px;
      padding: 8px 12px;
      border: 1px solid ${palette.primary};
      border-radius: 8px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    p {
      font-size: 16px;
      font-weight: 600;

      a {
        text-decoration: none;
        color: #000;
      }
    }

    @media (max-width: ${media.mobile}) {
      flex-direction: row;
    }
  }
`
