import { useDispatch } from 'react-redux'

import * as S from './style'

import { Wines } from '../../services/api'
import { AddCartList } from '../../store/reducer'

type Props = {
  wine: Wines
  imgWine: string
  nationality: string
  name: string
  category: string
  volume: number
  price: string
  margin: string
}

const CardWine = ({
  imgWine,
  nationality,
  name,
  price,
  category,
  volume,
  margin = '0',
  wine
}: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Card margin={margin}>
      <div>
        <S.CardImgWine>
          <img src={imgWine} alt="Img vinho brasileiro" />
          <S.CardImg>
            <img src={nationality} alt="Bandeira do brasil" />
          </S.CardImg>
        </S.CardImgWine>
        <S.Tags>
          <span>{category}</span>
          <span>{volume === 1 ? volume + 'L' : volume + 'ml'}</span>
        </S.Tags>
        <S.Title>{name}</S.Title>
        <S.Price>{price}</S.Price>
      </div>
      <S.AddButton onClick={() => dispatch(AddCartList(wine))}>
        Comprar
      </S.AddButton>
    </S.Card>
  )
}

export default CardWine
