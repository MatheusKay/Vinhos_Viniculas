import Slider from 'react-slick'

import slide1 from '../../assets/imagens/Carousel_1.png'
import slide2 from '../../assets/imagens/Carousel_2.png'
import slide3 from '../../assets/imagens/Carousel_3.png'

import { Slide, BotaoSlide } from './style'

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  }

  return (
    <Slider {...settings}>
      <Slide>
        <img src={slide1} alt="" />
        <div>
          <h2>Vinhos</h2>
        </div>
      </Slide>
      <Slide>
        <img src={slide2} alt="" />
        <div>
          <h2>Vinhos</h2>
        </div>
      </Slide>
      <Slide>
        <img src={slide3} alt="" />
        <div>
          <h2>Vinhos</h2>
        </div>
      </Slide>
    </Slider>
  )
}

export default Carrossel
