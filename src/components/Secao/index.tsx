import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import CardVinho from '../CardVinho'

import { SliderContain, Title } from './style'

import { Wines } from '../../services/api'
import { formattedPrice } from '../../utility'

type Props = {
  title: string
  wines: Wines[]
}

const Section = ({ title, wines }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <section className="container">
      <Title>{title}</Title>
      <SliderContain {...settings}>
        {wines.map((wine) => (
          <CardVinho
            key={wine.id}
            imgWine={wine.imgs.img_url}
            nationality={wine.imgs.country_url}
            name={wine.title}
            price={formattedPrice(wine.price)}
            category={wine.category}
            volume={wine.price}
            margin="16px"
            wine={wine}
          />
        ))}
      </SliderContain>
    </section>
  )
}

export default Section
