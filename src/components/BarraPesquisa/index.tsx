import { useEffect, useState } from 'react'

import { ListaSugestoes, CardSugestoes, Card } from './style'

import { Vinhos } from '../../services/api'
import { formattedPrice } from '../../utility'
import { useDispatch } from 'react-redux'
import { cardModal, openModal } from '../../store/reducer'

type Props = {
  clicado: boolean
  estaDigitando: string
  vinhos: Vinhos[]
}

const BarraPesquisa = ({ clicado, vinhos, estaDigitando }: Props) => {
  const [estaClicado, setEstaClicado] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setEstaClicado(clicado)
  }, [clicado])

  const handleModal = (wine: Vinhos) => {
    dispatch(openModal())
    dispatch(cardModal(wine))
  }

  return (
    <CardSugestoes>
      {estaClicado && (
        <>
          <h3>
            {estaDigitando
              ? 'Buscando por: ' + `"${estaDigitando}"`
              : 'Sugestões de Pesquisa'}
          </h3>
          <div>
            {vinhos.length > 0 ? (
              <ListaSugestoes>
                {vinhos.map((vinho, index) => (
                  <li key={vinho.id} onClick={() => handleModal(vinho)}>
                    <span>{index + 1}°</span>
                    <Card>
                      <div>
                        <img
                          className="img_country"
                          src={vinho.imgs.country_url}
                          alt="Imagem Pais"
                        />
                      </div>
                      <img
                        className="img_wine"
                        src={vinho.imgs.img_url}
                        alt="Imagem vinho"
                      />
                      <h4>{vinho.title}</h4>
                      <span>{formattedPrice(vinho.price)}</span>
                    </Card>
                  </li>
                ))}
              </ListaSugestoes>
            ) : (
              <p>Nenhum Vinho com esse nome foi encontrado</p>
            )}
          </div>
        </>
      )}
    </CardSugestoes>
  )
}

export default BarraPesquisa
