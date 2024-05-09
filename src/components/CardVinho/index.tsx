import { useDispatch } from 'react-redux'
import { Vinhos } from '../../services/api'
import {
  Card,
  CardImg,
  CardImgVinho,
  Titulo,
  Tags,
  Preco,
  AddBotao
} from './style'
import { AddCartList } from '../../store/reducer'

type Props = {
  wine: Vinhos
  imgVinho: string
  nacionalidade: string
  nome: string
  tipo: string
  volume: number
  preco: string
  margin: string
}

const CardVinho = ({
  imgVinho,
  nacionalidade,
  nome,
  preco,
  tipo,
  volume,
  margin = '0',
  wine
}: Props) => {
  const dispatch = useDispatch()

  return (
    <Card margin={margin}>
      <div>
        <CardImgVinho>
          <img src={imgVinho} alt="Img vinho brasileiro" />
          <CardImg>
            <img src={nacionalidade} alt="Bandeira do brasil" />
          </CardImg>
        </CardImgVinho>
        <Tags>
          <span>{tipo}</span>
          <span>{volume === 1 ? volume + 'L' : volume + 'ml'}</span>
        </Tags>
        <Titulo>{nome}</Titulo>
        <Preco>{preco}</Preco>
      </div>
      <AddBotao onClick={() => dispatch(AddCartList(wine))}>Comprar</AddBotao>
    </Card>
  )
}

export default CardVinho
