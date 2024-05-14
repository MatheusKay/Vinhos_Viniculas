import Slider from 'react-slick'
import styled from 'styled-components'

import vetorDestaque from '../../assets/imagens/btn_destaques.png'

import { media, palette } from '../../styles/estiloGlobal'

export const SliderContain = styled(Slider)`
  .slick-list {
    width: 95%;
    margin: 0 auto;
  }

  .slick-next:before,
  .slick-prev:before {
    width: 32px;
    height: 32px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    background-color: ${palette.primary};
  }

  .slick-next {
    right: 0;

    &:before {
      content: url(${vetorDestaque});
      opacity: 1;
      transform: rotate(270deg) scale(0.7);
    }
  }

  .slick-prev {
    left: -25px;

    &:before {
      content: url(${vetorDestaque});
      opacity: 1;
      transform: rotate(90deg) scale(0.7);
    }
  }

  @media (max-width: ${media.tablet}) {
    .slick-dots {
      bottom: -40px;
    }

    .slick-dots li {
      display: inline-block;
    }

    .slick-dots li button:before {
      content: '○';
      font-size: 28px;
    }

    .slick-dots li.slick-active button:before {
      color: ${palette.primary};
      content: '◉';
      font-size: 20px;
    }
  }
`

export const Title = styled.h2`
  margin: 80px 0;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;

  @media (max-width: ${media.mobile}) {
    margin: 64px 0;
    font-size: 24px;
  }
`
