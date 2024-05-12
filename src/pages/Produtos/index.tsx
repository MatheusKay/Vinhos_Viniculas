import { useSelector } from 'react-redux'

import SectionProducts from '../../components/SecaoProdutos'

import { useGetVinhosQuery } from '../../services/api'

import { RootReducer } from '../../store'
import { filterWines } from '../../utility'

const Products = () => {
  const { data: wines } = useGetVinhosQuery()
  const { filter, filterCountry } = useSelector(
    (state: RootReducer) => state.state
  )

  if (wines) {
    const displayedList = wines
    const winesFilter = filterWines(displayedList, filter, filterCountry)

    return (
      <>
        <SectionProducts
          titleSection="Nossos Produtos"
          wines={winesFilter ? winesFilter : displayedList}
        />
      </>
    )
  }

  return <div>Is Looading</div>
}

export default Products
