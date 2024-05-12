import PosterVinhos from '../PosterVinicola'

import * as S from './style'

import vetorLoc from '../../assets/imagens/img_loc.png'
import vetorSite from '../../assets/imagens/img_site.png'

export type Props = {
  isInverted?: boolean
  linkImg: string
  altImg: string
  title: string
  wineryDesc: string
  id: number
  location: string
  site: string
}

const Winery = ({
  isInverted = false,
  altImg,
  linkImg,
  wineryDesc,
  title,
  id,
  location,
  site
}: Props) => {
  return (
    <div className="container">
      <S.ContainerWinery isInverted={isInverted}>
        <S.ContainerPoster>
          <PosterVinhos altImg={altImg} linkImg={linkImg} />
        </S.ContainerPoster>
        <S.ContainerInfos isInverted={isInverted}>
          <div className="text_num">
            <S.Title>{title}</S.Title>
            <span>{'0' + id}</span>
          </div>
          <S.WineryInfos isInverted={isInverted}>
            <div>
              <span>
                <img
                  src={vetorLoc}
                  alt="Imagem que representa a Localização da vinicola"
                />
              </span>
              <p>{location}</p>
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
          </S.WineryInfos>
          <p className="text_desc">{wineryDesc}</p>
        </S.ContainerInfos>
      </S.ContainerWinery>
    </div>
  )
}

export default Winery
