import { Pagination, Botao } from './style'

type Props = {
  onClick: (page: number) => void
  currentPage: number
  totalPages: number
}

const Paginacao = ({ currentPage, onClick, totalPages }: Props) => {
  const buttonsToShow = 9
  const fistButton = Math.max(1, currentPage - Math.floor(buttonsToShow / 2))
  const lastButton = Math.min(totalPages, fistButton + buttonsToShow - 1)

  const buttons = []

  const heandleClick = (page: number) => {
    onClick(page)
  }

  for (let i = fistButton; i <= lastButton - 1; i++) {
    buttons.push(
      <Botao
        href="#nossos_produtos"
        key={i}
        onClick={() => heandleClick(i)}
        className={i === currentPage ? 'pagination__button--active' : ''}
      >
        {i < 10 ? '0' + i : i}
      </Botao>
    )
  }

  return (
    <Pagination>
      {buttons}
      {currentPage < totalPages - 1 && <span>. . .</span>}
      <Botao
        href="#nossos_produtos"
        onClick={() => heandleClick(totalPages)}
        className={
          currentPage === totalPages ? 'pagination__button--active' : ''
        }
      >
        {totalPages < 10 ? '0' + totalPages : totalPages}
      </Botao>
    </Pagination>
  )
}

export default Paginacao
