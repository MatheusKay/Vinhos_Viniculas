import { useState } from 'react'

import { Vinhos } from '../../services/api'

import { ListaVinhos, Titulo, Secao } from './style'

import CardVinho from '../CardVinho'
import Filtros from '../Filtros'
import Paginacao from '../Paginação'
import { formattedPrice } from '../../utility'

export type Props = {
  vinhos: Vinhos[]
  nomeSecao: string
}

const SecaoProdutos = ({ vinhos, nomeSecao }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const totalPages = Math.ceil(vinhos.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = vinhos.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Secao id="nossos_produtos">
      <div className="container">
        <Titulo>{nomeSecao}</Titulo>
        <Filtros />
        <div>
          <ListaVinhos>
            {currentItems.map((vinho) => (
              <CardVinho
                key={vinho.id}
                imgVinho={vinho.imgs.img_url}
                nacionalidade={vinho.imgs.country_url}
                nome={vinho.title}
                preco={formattedPrice(vinho.price)}
                tipo={vinho.category}
                volume={vinho.price}
                margin="0"
                wine={vinho}
              />
            ))}
          </ListaVinhos>
          <Paginacao
            currentPage={currentPage}
            totalPages={totalPages}
            onClick={goToPage}
          />
        </div>
      </div>
    </Secao>
  )
}

export default SecaoProdutos
