import { Pagination, Button } from './style'

type Props = {
  onClick: (page: number) => void
  currentPage: number
  totalPages: number
}

const Pages = ({ currentPage, onClick, totalPages }: Props) => {
  const buttonsToShow = 9
  const fistButton = Math.max(1, currentPage - Math.floor(buttonsToShow / 2))
  const lastButton = Math.min(totalPages, fistButton + buttonsToShow - 1)

  const buttons = []

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
