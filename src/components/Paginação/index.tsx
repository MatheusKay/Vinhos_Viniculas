import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Pagination, Button } from './style'

import { RootReducer } from '../../store'

type Props = {
  onClick: (page: number) => void
  currentPage: number
  totalPages: number
}

const Pages = ({ currentPage, onClick, totalPages }: Props) => {
  const isMobile = window.matchMedia(
    'only screen and (max-width: 768px)'
  ).matches

  const buttonsToShow = isMobile ? 5 : 9
  const fistButton = Math.max(1, currentPage - Math.floor(buttonsToShow / 2))
  const lastButton = Math.min(totalPages, fistButton + buttonsToShow - 1)

  const { filter, filterCountry } = useSelector((s: RootReducer) => s.state)

  const buttons: JSX.Element[] = []

  const heandleClick = (page: number) => {
    onClick(page)
  }

  for (let i = fistButton; i <= lastButton - 1; i++) {
    buttons.push(
      <Button
        href="#nossos_produtos"
        key={i}
        onClick={() => heandleClick(i)}
        className={i === currentPage ? 'pagination__button--active' : ''}
      >
        {i < 10 ? '0' + i : i}
      </Button>
    )
  }

  useEffect(() => {
    heandleClick(1)
  }, [filter, filterCountry])

  return (
    <Pagination>
      {buttons}
      {currentPage < totalPages - 1 && <span>. . .</span>}
      <Button
        href="#nossos_produtos"
        onClick={() => heandleClick(totalPages)}
        className={
          currentPage === totalPages ? 'pagination__button--active' : ''
        }
      >
        {totalPages < 10 ? '0' + totalPages : totalPages}
      </Button>
    </Pagination>
  )
}

export default Pages
