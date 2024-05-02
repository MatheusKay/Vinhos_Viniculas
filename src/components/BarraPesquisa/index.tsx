import { useEffect, useState } from 'react'

import { ListaSugestoes, CardSugestoes, Card } from './style'

import imgPais from '../../assets/imagens/ImgPais/brasil.png'
import imgVinho from '../../assets/imagens/ImgVinhos/vinho1-chileno.jpg'

type Props = {
  clicado: boolean
}

const BarraPesquisa = ({ clicado }: Props) => {
  const [estaClicado, setEstaClicado] = useState(false)

  useEffect(() => {
    setEstaClicado(clicado)
  }, [clicado])

  return (
    <CardSugestoes>
      {estaClicado && (
        <>
          <h3>Sugestões de pesquisa</h3>
          <div>
            <ListaSugestoes>
              <li>
                <span>1°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
              <li>
                <span>2°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
              <li>
                <span>3°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
              <li>
                <span>4°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
              <li>
                <span>5°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
              <li>
                <span>6°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
              <li>
                <span>7°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
              <li>
                <span>8°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
              <li>
                <span>9°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
              <li>
                <span>10°</span>
                <Card>
                  <div>
                    <img
                      className="img_country"
                      src={imgPais}
                      alt="Imagem Pais"
                    />
                  </div>
                  <img className="img_wine" src={imgVinho} alt="Imagem vinho" />
                  <h4>Vinho Tinto</h4>
                  <span>290,00</span>
                </Card>
              </li>
            </ListaSugestoes>
          </div>
        </>
      )}
    </CardSugestoes>
  )
}

export default BarraPesquisa
