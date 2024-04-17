import PosterVinhos from '../PosterVinicola'

import {
  ContainerVinicola,
  ContainerInfos,
  Titulo,
  Overlay,
  ContainerPoster
} from './style'

export type Props = {
  estaInvertido?: boolean
  linkImg: string
  altImg: string
  titulo: string
  descVinicola: string
}

const Vinicola = ({
  estaInvertido = false,
  altImg,
  linkImg,
  descVinicola,
  titulo
}: Props) => {
  return (
    <div className="container">
      <ContainerVinicola estaInvertido={estaInvertido}>
        <ContainerPoster>
          <Overlay />
          <PosterVinhos altImg={altImg} linkImg={linkImg} />
        </ContainerPoster>
        <ContainerInfos>
          <Titulo>{titulo}</Titulo>
          <p>{descVinicola}</p>
        </ContainerInfos>
      </ContainerVinicola>
    </div>
  )
}

export default Vinicola
