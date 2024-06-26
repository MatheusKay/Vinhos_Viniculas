import Slider from 'react-slick'
import styled from 'styled-components'

import dots from '../../assets/imagens/dots_inativo.png'
import dotsActive from '../../assets/imagens/dots_active.png'

import next from '../../assets/imagens/next.png'
import prev from '../../assets/imagens/prev.png'
import { media } from '../../styles/estiloGlobal'

export const SliderContainer = styled(Slider)`
  .slick-dots {
    display: flex !important;
    justify-content: center;
    bottom: 36px;

    .slick-active {
      display: block;
    }

    li {
      margin: 0 12px;
      display: inline-block;

      button:before {
        content: url(${dots});
      }
    }

    li.slick-active button:before {
      content: url(${dotsActive});
    }

    @media (max-width: ${media.mobile}) {
      bottom: 16px;
    }
  }

  .slick-next {
    right: 56px;

    &:before {
      content: url(${next});
    }

    @media (max-width: ${media.mobile}) {
      display: none;
    }
  }

  .slick-prev {
    left: 56px;

    &:before {
      content: url(${prev});
    }

    @media (max-width: ${media.mobile}) {
      display: none;
    }
  }
`

export const Slide = styled.div`
  height: 440px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  @media (max-width: ${media.mobile}) {
    height: 15em;
  }
`

export const SliderItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-weight: 600;

  h2 {
    margin-bottom: 40px;
    font-size: 36px;
  }

  p {
    margin-bottom: 104px;
    font-size: 16px;
  }

  @media (max-width: ${media.mobile}) {
    h2 {
      margin-bottom: 24px;
      font-size: 24px;
    }

    p {
      margin-bottom: 40px;
      text-align: center;
    }
  }
`

export const SlideButton = styled.a`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: #dc143c;

  img {
    width: 34px;
    height: 20px;
  }

  @media (max-width: ${media.mobile}) {
    width: 40px;
    height: 40px;

    img {
      width: 24px;
      height: 12px;
    }
  }
`

export const LinkButton = styled.button`
  width: 296px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #fff;
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;

  @media (max-width: ${media.mobile}) {
    width: 12em;
    padding: 8px;
    font-size: 14px;
  }
`
