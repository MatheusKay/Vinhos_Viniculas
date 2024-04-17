import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import slide1 from '../../assets/imagens/slide-barril-vinho.jpg'
import slide2 from '../../assets/imagens/slide2-barril-vinho-branco.jpg'
import slide3 from '../../assets/imagens/vinhos_arya_rodrigo_azevedo_zona_sul (1).jpg'

import { Slide, BotaoSlide } from './style'

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Slider {...settings}>
      <Slide>
        <img src={slide1} alt="Slide 1 de Vinhos mais vendidos" />
        <div>
          <h2>Destaques e mais vendidos</h2>
          <BotaoSlide href="">Destaques</BotaoSlide>
        </div>
      </Slide>
      <Slide>
        <img src={slide2} alt="Slide 2 de Vinhos populares" />
        <div>
          <h2>Conheça as vinicolas do Brasil</h2>
          <BotaoSlide href="">Vinicolas</BotaoSlide>
        </div>
      </Slide>
      <Slide>
        <img src={slide3} alt="Slide 3 de Variedade de vinhos" />
        <div>
          <h2>Vinhos em lata e organicos</h2>
          <BotaoSlide href="">Bebidas</BotaoSlide>
        </div>
      </Slide>
    </Slider>
  )
}

export default Carrossel
