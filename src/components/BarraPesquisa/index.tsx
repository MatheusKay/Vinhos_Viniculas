import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { ListSuggestions, CardSuggestions, Card } from './style'

import { Wines } from '../../services/api'
import { formattedPrice } from '../../utility'
import { cardModal, openModal } from '../../store/reducer'

type Props = {
  clicked: boolean
  isTyping: string
  vinhos: Wines[]
}

const SearchBar = ({ clicked, vinhos, isTyping }: Props) => {
  const [isClick, setIsClick] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setIsClick(clicked)
  }, [clicked])

  const handleModal = (wine: Wines) => {
    dispatch(openModal())
    dispatch(cardModal(wine))
  }

  return (
    <CardSuggestions>
      {isClick && (
        <>
          <h3>
            {isTyping
              ? 'Buscando por: ' + `"${isTyping}"`
              : 'Sugestões de Pesquisa'}
          </h3>
          <div>
            {vinhos.length > 0 ? (
              <ListSuggestions>
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
                      <span className="text_price">
                        {formattedPrice(vinho.price)}
                      </span>
                    </Card>
                  </li>
                ))}
              </ListSuggestions>
            ) : (
              <p>Nenhum Vinho com esse nome foi encontrado</p>
            )}
          </div>
        </>
      )}
    </CardSuggestions>
  )
}

export default SearchBar
