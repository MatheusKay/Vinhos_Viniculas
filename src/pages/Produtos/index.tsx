import { useSelector } from 'react-redux'

import SecaoProdutos from '../../components/SecaoProdutos'

import { useGetVinhosQuery } from '../../services/api'

import { RootReducer } from '../../store'
import { filtrarVinhos, listVinhos } from '../../utility'

const Produtos = () => {
  const { data: vinhos } = useGetVinhosQuery()
  const { filtro, filtroCountry } = useSelector(
    (state: RootReducer) => state.state
  )

  if (vinhos) {
    const listExibida = listVinhos(vinhos)
    const vinhosFiltro = filtrarVinhos(listExibida, filtro, filtroCountry)

    return (
      <>
        <SecaoProdutos
          nomeSecao="Nossos Produtos"
          vinhos={vinhosFiltro ? vinhosFiltro : listExibida}
        />
      </>
    )
  }

  return <div>Is Looading</div>
}

export default Produtos
