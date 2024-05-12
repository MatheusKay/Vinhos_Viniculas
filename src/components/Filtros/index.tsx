import { FiltrosContainer, FiltrosSelects } from './style'

import Select from '../Select'

const Filter = () => {
  return (
    <FiltrosContainer>
      <h3>Filtros</h3>
      <FiltrosSelects>
        <div className="section_filtro">
          <h4>Tipos de Vinhos</h4>
          <Select category="wine" />
        </div>
        <div className="section_filtro">
          <h4>Pais de Origem</h4>
          <Select category="country" />
        </div>
      </FiltrosSelects>
    </FiltrosContainer>
  )
}

export default Filter
