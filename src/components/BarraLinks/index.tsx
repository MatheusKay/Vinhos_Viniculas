import { LinksVinhos } from './style'

type Props = {
  vinhos: boolean
}

const BarraLinks = ({ vinhos }: Props) => {
  return (
    <>
      <LinksVinhos>
        {vinhos ? (
          <>
            <li>
              <a href="">Vinhos Tintos</a>
            </li>
            <li>
              <a href="">Vinhos Brancos</a>
            </li>
            <li>
              <a href="">Vinhos Roses</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="">Vinhos Organicos/Nat</a>
            </li>
            <li>
              <a href="">Vinhos em lata</a>
            </li>
          </>
        )}
      </LinksVinhos>
    </>
  )
}

export default BarraLinks
