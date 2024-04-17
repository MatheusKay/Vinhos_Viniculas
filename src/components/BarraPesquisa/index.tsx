import { useEffect, useState } from 'react'

import { ListaSugestoes } from './style'

type Props = {
  clicado: boolean
}

const BarraPesquisa = ({ clicado }: Props) => {
  const [estaClicado, setEstaClicado] = useState(false)

  useEffect(() => {
    setEstaClicado(clicado)
  }, [clicado])

  return (
    <>
      {estaClicado && (
        <>
          <h3>Sugestões de pesquisa</h3>
          <div>
            <ListaSugestoes>
              <li>
                <span>1°</span>Vinho Tinto
              </li>
              <li>
                <span>2°</span>Vinho Tinto
              </li>
              <li>
                <span>3°</span>Vinho Tinto
              </li>
              <li>
                <span>4°</span>Vinho Tinto
              </li>
              <li>
                <span>5°</span>Vinho Tinto
              </li>
              <li>
                <span>6°</span>Vinho Tinto
              </li>
              <li>
                <span>7°</span>Vinho Tinto
              </li>
              <li>
                <span>8°</span>Vinho Tinto
              </li>
              <li>
                <span>9°</span>Vinho Tinto
              </li>
              <li>
                <span>10°</span>Vinho Tinto
              </li>
            </ListaSugestoes>
          </div>
        </>
      )}
    </>
  )
}

export default BarraPesquisa
