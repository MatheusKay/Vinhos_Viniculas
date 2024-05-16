import styled from 'styled-components'
import { media, palette } from '../../styles/estiloGlobal'

type Props = {
  margin: string
}

export const Card = styled.div<Props>`
  margin-right: ${(props) => props.margin};

  > div {
    max-height: 480px;
    height: 100%;
    padding: 16px;
    position: relative;
    border: 2px solid #303030;
    border-bottom: none;
    border-radius: 8px 8px 0 0;

    @media (max-width: ${media.mobile}) {
      padding: 8px;
    }

    @media (max-width: ${media.tablet}) {
      height: 32em;
    }

    @media (max-width: ${media.desktop}) {
      max-height: unset;
      height: 33em;
    }
  }
`

export const CardImgWine = styled.div`
  display: flex;
  justify-content: center;

  > img {
    height: 250px;

    @media (max-width: ${media.mobile}) {
      height: 8em;
    }

    @media (max-width: ${media.tablet}) {
      height: 14em;
    }
  }
`

export const CardImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 32px;
    height: 32px;
    border-radius: 0 6px 0 8px;

    @media (max-width: ${media.mobile}) {
      width: 24px;
      height: 24px;
    }
  }
`

export const Title = styled.h3`
  min-height: 75px;
  margin-bottom: 36px;
  text-align: center;
  font-size: 18px;

  @media (max-width: ${media.mobile}) {
    min-height: 7em;
    font-size: 16px;
  }

  @media (max-width: ${media.tablet}) {
    min-height: 6em;
  }

  @media (max-width: ${media.desktop}) {
    min-height: 7em;
    margin-bottom: 0;
  }
`

export const Tags = styled.div`
  margin: 12px 0;
  display: flex;
  justify-content: center;
  column-gap: 8px;

  span {
    min-width: 96px;
    padding: 8px;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    border-radius: 8px;
    background-color: ${palette.secondary};
    color: ${palette.neutralColor};

    @media (max-width: ${media.mobile}) {
      font-size: 10px;
    }
  }

  @media (max-width: ${media.mobile}) {
    flex-direction: column;
    row-gap: 8px;
  }

  @media (max-width: ${media.desktop}) {
    flex-direction: column;
    row-gap: 8px;
  }
`

export const Price = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #518c16;

  @media (max-width: ${media.mobile}) {
    font-size: 16px;
  }
`

export const AddButton = styled.button`
  width: 100%;
  padding: 17px 86px;
  border: none;
  border-radius: 0 0 8px 8px;
  background-color: #dc143c;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: ${media.mobile}) {
    padding: 8px;
    font-size: 16px;
  }

  @media (max-width: ${media.desktop}) {
    padding: 16px;
  }
`
