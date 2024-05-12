import slide1 from '../../assets/imagens/Carousel_1.png'
import slide2 from '../../assets/imagens/Carousel_2.png'
import slide3 from '../../assets/imagens/Carousel_3.png'

import vetorDestaque from '../../assets/imagens/btn_destaques.png'

import * as S from './style'

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
    <S.SliderContainer {...settings}>
      <S.Slide>
        <img src={slide1} alt="" />
        <S.SliderItem>
          <h2>wineHighlights e Mais Vendidos</h2>
          <p>Veja abaixo os maiores vinhos deste mês</p>
          <S.SlideButton>
            <img
              src={vetorDestaque}
              alt="Botão para ver Vinhos em wineHighlights"
            />
          </S.SlideButton>
        </S.SliderItem>
      </S.Slide>
      <S.Slide>
        <img src={slide2} alt="" />
        <S.SliderItem>
          <h2>Conheça as vínicolas do Brasil</h2>
          <p>Saiba de onde vem os melhores vinhos brasileiros</p>
          <S.LinkButton>Saiba Mais</S.LinkButton>
        </S.SliderItem>
      </S.Slide>
      <S.Slide>
        <img src={slide3} alt="" />
        <S.SliderItem>
          <h2>wineHighlights e Mais Vendidos</h2>
          <p>Veja abaixo os maiores vinhos deste mês</p>
          <S.LinkButton>Saiba Mais</S.LinkButton>
        </S.SliderItem>
      </S.Slide>
    </S.SliderContainer>
  )
}

export default Carrossel
