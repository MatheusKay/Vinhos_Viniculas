import { useState } from 'react'

import { Wines } from '../../services/api'

import { ListWines, Title, Section } from './style'

import CardWine from '../CardVinho'
import Filter from '../Filtros'
import Pages from '../Paginação'

import { formattedPrice } from '../../utility'

export type Props = {
  wines: Wines[]
  titleSection: string
}

const SectionProducts = ({ wines, titleSection }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const totalPages = Math.ceil(wines.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = wines.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Section id="nossos_produtos">
      <div className="container">
        <Title>{titleSection}</Title>
        <Filter />
        <div>
          <ListWines>
            {currentItems.map((wine) => (
              <CardWine
                key={wine.id}
                imgWine={wine.imgs.img_url}
                nationality={wine.imgs.country_url}
                name={wine.title}
                price={formattedPrice(wine.price)}
                category={wine.category}
                volume={wine.price}
                margin="0"
                wine={wine}
              />
            ))}
          </ListWines>
          <Pages
            currentPage={currentPage}
            totalPages={totalPages}
            onClick={goToPage}
          />
        </div>
      </div>
    </Section>
  )
}

export default SectionProducts
