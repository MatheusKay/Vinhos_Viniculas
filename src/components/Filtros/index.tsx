import { useDispatch, useSelector } from 'react-redux'

import { FiltrosContainer, Botao, BotaoPais } from './style'

import bandBrasil from '../../assets/imagens/ImgPais/brasil.png'
import bandArgentina from '../../assets/imagens/ImgPais/argentina.png'
import bandChile from '../../assets/imagens/ImgPais/chile.png'
import bandFranca from '../../assets/imagens/ImgPais/franca.png'
import bandtalia from '../../assets/imagens/ImgPais/italia.png'
import bandPortugal from '../../assets/imagens/ImgPais/portugal.png'

import { filtrar, filtrarCountry } from '../../store/reducer'
import { RootReducer } from '../../store'

const Filtros = () => {
  const { filtro, filtroCountry } = useSelector(
    (state: RootReducer) => state.state
  )

  const dispatch = useDispatch()

  return (
    <FiltrosContainer>
      <h3>Filtros</h3>
      <div className="section_filtro">
        <h4>Tipos de Vinhos</h4>
        <Botao
          className={filtro === '' ? 'btn_active' : ''}
          onClick={() => dispatch(filtrar(''))}
        >
          Todos
        </Botao>
        <Botao
          className={filtro === 'Tinto' ? 'btn_active' : ''}
          onClick={() => dispatch(filtrar('Tinto'))}
        >
          Tinto
        </Botao>
        <Botao
          className={filtro === 'Branco' ? 'btn_active' : ''}
          onClick={() => dispatch(filtrar('Branco'))}
        >
          Branco
        </Botao>
        <Botao
          className={filtro === 'Rose' ? 'btn_active' : ''}
          onClick={() => dispatch(filtrar('Rose'))}
        >
          Rosé
        </Botao>
        <Botao
          className={filtro === 'Organico' ? 'btn_active' : ''}
          onClick={() => dispatch(filtrar('Organico'))}
        >
          Orgânico
        </Botao>
        <Botao
          className={filtro === 'Lata' ? 'btn_active' : ''}
          onClick={() => dispatch(filtrar('Lata'))}
        >
          Lata
        </Botao>
      </div>
      <div className="section_filtro">
        <h4>Pais de Origem</h4>
        <Botao
          className={filtroCountry === '' ? 'btn_active' : ''}
          onClick={() => dispatch(filtrarCountry(''))}
        >
          Todos
        </Botao>
        <BotaoPais>
          <Botao
            onClick={() => dispatch(filtrarCountry('Argentino'))}
            className={filtroCountry === 'Argentino' ? 'btn_active' : ''}
          >
            Argentina
          </Botao>
          <img
            src={bandArgentina}
            alt="Imagem da bandeira da Argentina no Filtro"
          />
        </BotaoPais>
        <BotaoPais>
          <Botao
            className={filtroCountry === 'Brasil' ? 'btn_active' : ''}
            onClick={() => dispatch(filtrarCountry('Brasil'))}
          >
            Brasil
          </Botao>
          <img src={bandBrasil} alt="Imagem da bandeira da Brasil no Filtro" />
        </BotaoPais>
        <BotaoPais>
          <Botao
            className={filtroCountry === 'Chile' ? 'btn_active' : ''}
            onClick={() => dispatch(filtrarCountry('Chile'))}
          >
            Chile
          </Botao>
          <img src={bandChile} alt="Imagem da bandeira da Chile no Filtro" />
        </BotaoPais>
        <BotaoPais>
          <Botao
            className={filtroCountry === 'França' ? 'btn_active' : ''}
            onClick={() => dispatch(filtrarCountry('França'))}
          >
            França
          </Botao>
          <img src={bandFranca} alt="Imagem da bandeira da França no Filtro" />
        </BotaoPais>
        <BotaoPais>
          <Botao
            className={filtroCountry === 'Itália' ? 'btn_active' : ''}
            onClick={() => dispatch(filtrarCountry('Itália'))}
          >
            Italia
          </Botao>
          <img src={bandtalia} alt="Imagem da bandeira da Italia no Filtro" />
        </BotaoPais>
        <BotaoPais>
          <Botao
            className={filtroCountry === 'Portugal' ? 'btn_active' : ''}
            onClick={() => dispatch(filtrarCountry('Portugal'))}
          >
            Portugal
          </Botao>
          <img
            src={bandPortugal}
            alt="Imagem da bandeira da Portugal no Filtro"
          />
        </BotaoPais>
      </div>
    </FiltrosContainer>
  )
}

export default Filtros
