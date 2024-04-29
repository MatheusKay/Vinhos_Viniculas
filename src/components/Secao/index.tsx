import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CardVinho from '../CardVinho'

import { SliderContain, Titulo } from './style'
import { Vinhos } from '../../services/api'

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
    <section className="container">
      <Titulo>{titulo}</Titulo>
      <SliderContain {...settings}>
        {vinhos.map((vinho) => (
          <CardVinho
            key={vinho.id}
            imgVinho={vinho.imgs.img_url}
            nacionalidade={vinho.imgs.country_url}
            nome={vinho.title}
            preco={vinho.price}
            tipo={vinho.category}
            volume={vinho.price}
            margin="16px"
          />
        ))}
      </SliderContain>
    </section>
  )
}

export default Secao
