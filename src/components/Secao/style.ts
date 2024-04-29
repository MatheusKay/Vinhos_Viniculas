import Slider from 'react-slick'
import styled from 'styled-components'

export const SliderContain = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    font-size: 40px;
    color: #dc143c;
  }

  .slick-next {
    right: -25px;

    &:before {
      content: 'ᐳ';
      opacity: 1;
    }
  }

  .slick-prev {
    left: -45px;

    &:before {
      content: 'ᐸ';
      opacity: 1;
    }
  }
`

export const Titulo = styled.h2`
  margin: 80px 0;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.25em;
`
