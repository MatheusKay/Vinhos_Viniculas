import slide1 from '../../assets/imagens/Carousel_1.png'
import slide2 from '../../assets/imagens/Carousel_2.png'
import slide3 from '../../assets/imagens/Carousel_3.png'

import vetorDestaque from '../../assets/imagens/btn_destaques.png'

import {
  Slide,
  BotaoSlide,
  SliderItem,
  SliderContainer,
  BotaoLink
} from './style'

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
    <SliderContainer {...settings}>
      <Slide>
        <img src={slide1} alt="" />
        <SliderItem>
          <h2>Destaques e Mais Vendidos</h2>
          <p>Veja abaixo os maiores vinhos deste mês</p>
          <BotaoSlide>
            <img src={vetorDestaque} alt="Botão para ver Vinhos em destaques" />
          </BotaoSlide>
        </SliderItem>
      </Slide>
      <Slide>
        <img src={slide2} alt="" />
        <SliderItem>
          <h2>Conheça as vínicolas do Brasil</h2>
          <p>Saiba de onde vem os melhores vinhos brasileiros</p>
          <BotaoLink>Saiba Mais</BotaoLink>
        </SliderItem>
      </Slide>
      <Slide>
        <img src={slide3} alt="" />
        <SliderItem>
          <h2>Destaques e Mais Vendidos</h2>
          <p>Veja abaixo os maiores vinhos deste mês</p>
          <BotaoLink>Saiba Mais</BotaoLink>
        </SliderItem>
      </Slide>
    </SliderContainer>
  )
}

export default Carrossel
