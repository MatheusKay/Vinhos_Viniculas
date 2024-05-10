import { useEffect, useState } from 'react'

import { ListaSugestoes, CardSugestoes, Card } from './style'

import imgPais from '../../assets/imagens/ImgPais/brasil.png'
import { Vinhos } from '../../services/api'
import { formattedPrice } from '../../utility'

type Props = {
  clicado: boolean
  estaDigitando: string
  vinhos: Vinhos[]
}

const BarraPesquisa = ({ clicado, vinhos, estaDigitando }: Props) => {
  const [estaClicado, setEstaClicado] = useState(false)

  useEffect(() => {
    setEstaClicado(clicado)
  }, [clicado])

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
                  <li key={vinho.id}>
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
