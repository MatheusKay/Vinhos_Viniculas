import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CardVinho from '../CardVinho'

import { Section, Titulo } from './style'
import { Vinhos } from '../../services/apiFake'

type Props = {
  titulo: string
  vinhos: Vinhos[]
}

const Secao = ({ titulo, vinhos }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <Section className="container">
      <Titulo>{titulo}</Titulo>
      <Slider {...settings}>
        {vinhos.map((vinho) => (
          <CardVinho
            key={vinho.id}
            imgVinho={vinho.imgVinho}
            nacionalidade={vinho.nacionalidade}
            nome={vinho.nome}
            preco={vinho.preco}
            tipo={vinho.tipo}
            volume={vinho.volume}
          />
        ))}
      </Slider>
    </Section>
  )
}

export default Secao
