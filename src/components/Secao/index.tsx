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
  const isMobile = window.matchMedia(
    'only screen and (max-width: 767px)'
  ).matches

  const isTablet = window.matchMedia(
    'only screen and (min-width: 768px) and (max-width: 1024px)'
  ).matches

  const viewScreen = () => {
    let screenShow = 0

    if (isMobile) {
      screenShow = 2
    } else if (isTablet) {
      screenShow = 3
    } else {
      screenShow = 4
    }

    return screenShow
  }

  const screen = viewScreen()

  const settings = {
    dots: true,
    arrows: !isMobile && !isTablet,
    infinite: true,
    speed: 500,
    slidesToShow: screen,
    slidesToScroll: 1
  }

  const listWines = wines.slice(0, 5)

  return (
    <section className="container">
      <Title>{title}</Title>
      <SliderContain {...settings}>
        {listWines.map((wine) => (
          <CardVinho
            key={wine.id}
            imgWine={wine.imgs.img_url}
            nationality={wine.imgs.country_url}
            name={wine.title}
            price={formattedPrice(wine.price)}
            category={wine.category}
            volume={wine.price}
            margin={isMobile ? '8px' : '16px'}
            wine={wine}
          />
        ))}
      </SliderContain>
    </section>
  )
}

export default Section
