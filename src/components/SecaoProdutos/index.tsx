import { Vinhos } from '../../services/apiFake'

import { Links, ListaVinhos, Titulo, Secao } from './style'

import CardVinho from '../CardVinho'

export type Props = {
  vinhos: Vinhos[]
  nomeSecao: string
  eBebida?: boolean
  corFundo: string
}

const SecaoProdutos = ({
  vinhos,
  nomeSecao,
  eBebida = false,
  corFundo
}: Props) => {
  return (
    <Secao>
      <div className="container">
        <Titulo>{nomeSecao}</Titulo>
        <div>
          <Links>
            {eBebida ? (
              <>
                <li>
                  <a href="">Vinhos Organicos</a>
                </li>
                <li>
                  <a href="">Vinhos em Latas</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="">Brasileiros</a>
                </li>
                <li>
                  <a href="">Italianos</a>
                </li>
                <li>
                  <a href="">Argentinos</a>
                </li>
                <li>
                  <a href="">Chilenos</a>
                </li>
              </>
            )}
          </Links>
        </div>
        <ListaVinhos>
          {vinhos.map((vinho) => (
            <CardVinho
              key={vinho.id}
              imgVinho={vinho.imgVinho}
              nacionalidade={vinho.nacionalidade}
              nome={vinho.nome}
              preco={vinho.preco}
              tipo={vinho.tipo}
              volume={vinho.volume}
            />
          ))}
        </ListaVinhos>
      </div>
    </Secao>
  )
}

export default SecaoProdutos
