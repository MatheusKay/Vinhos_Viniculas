import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { LinksVinhos } from './style'

import { filtrar } from '../../store/reducer'

type Props = {
  vinhos: boolean
}

const BarraLinks = ({ vinhos }: Props) => {
  const dispatch = useDispatch()

  return (
    <>
      <LinksVinhos>
        {vinhos ? (
          <>
            <li>
              <Link to="/produtos" onClick={() => dispatch(filtrar('Tinto'))}>
                Vinhos Tintos
              </Link>
            </li>
            <li onClick={() => dispatch(filtrar('Branco'))}>
              <Link to="/produtos">Vinhos Brancos</Link>
            </li>
            <li onClick={() => dispatch(filtrar('Rose'))}>
              <Link to="/produtos">Vinhos Roses</Link>
            </li>
          </>
        ) : (
          <>
            <li onClick={() => dispatch(filtrar('Organico'))}>
              <Link to="/produtos">Vinhos Organicos/Nat</Link>
            </li>
            <li onClick={() => dispatch(filtrar('Lata'))}>
              <Link to="/produtos">Vinhos em lata</Link>
            </li>
          </>
        )}
      </LinksVinhos>
    </>
  )
}

export default BarraLinks
