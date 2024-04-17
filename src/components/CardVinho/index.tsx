import {
  Card,
  CardImg,
  CardImgVinho,
  Titulo,
  Tags,
  Preco,
  AddBotao
} from './style'

type Props = {
  imgVinho: string
  nacionalidade: string
  nome: string
  tipo: string
  volume: number
  preco: number
}

const CardVinho = ({
  imgVinho,
  nacionalidade,
  nome,
  preco,
  tipo,
  volume
}: Props) => {
  return (
    <Card>
      <CardImgVinho>
        <img src={imgVinho} alt="Img vinho brasileiro" />
        <CardImg>
          <img src={nacionalidade} alt="Bandeira do brasil" />
        </CardImg>
      </CardImgVinho>
      <Titulo>{nome}</Titulo>
      <Tags>
        <p>{tipo}</p>|<p>{volume === 750 ? volume + 'ml' : volume + 'l'}</p>
      </Tags>
      <Preco>R$ {preco}</Preco>
      <AddBotao>Adicionar</AddBotao>
    </Card>
  )
}

export default CardVinho
