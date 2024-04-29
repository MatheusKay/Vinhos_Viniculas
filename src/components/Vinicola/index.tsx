import PosterVinhos from '../PosterVinicola'

import {
  ContainerVinicola,
  ContainerInfos,
  Titulo,
  Overlay,
  ContainerPoster,
  InfosVinicola
} from './style'

import vetorLoc from '../../assets/imagens/img_loc.png'
import vetorSite from '../../assets/imagens/img_site.png'

export type Props = {
  estaInvertido?: boolean
  linkImg: string
  altImg: string
  titulo: string
  descVinicola: string
  id: number
  localizacao: string
  site: string
}

const Vinicola = ({
  estaInvertido = false,
  altImg,
  linkImg,
  descVinicola,
  titulo,
  id,
  localizacao,
  site
}: Props) => {
  return (
    <div className="container">
      <ContainerVinicola estaInvertido={estaInvertido}>
        <ContainerPoster>
          <Overlay />
          <PosterVinhos altImg={altImg} linkImg={linkImg} />
        </ContainerPoster>
        <ContainerInfos estaInvertido={estaInvertido}>
          <div className="text_num">
            <Titulo>{titulo}</Titulo>
            <span>{'0' + id}</span>
          </div>
          <InfosVinicola estaInvertido={estaInvertido}>
            <div>
              <span>
                <img
                  src={vetorLoc}
                  alt="Imagem que representa a Localização da vinicola"
                />
              </span>
              <p>{localizacao}</p>
            </div>
            <div>
              <span>
                <img
                  src={vetorSite}
                  alt="Imagem que representa o site da vinicola"
                />
              </span>
              <p>
                <a href={'https://' + site} target="_blank" rel="noreferrer">
                  {site}
                </a>
              </p>
            </div>
          </InfosVinicola>
          <p className="text_desc">{descVinicola}</p>
        </ContainerInfos>
      </ContainerVinicola>
    </div>
  )
}

export default Vinicola
