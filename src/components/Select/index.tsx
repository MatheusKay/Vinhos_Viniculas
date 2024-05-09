import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import vetorUp from '../../assets/imagens/Vector_Up.svg'
import vetorDown from '../../assets/imagens/Vector_Down.svg'
import bandBrasil from '../../assets/imagens/ImgPais/brasil.png'
import bandArgentina from '../../assets/imagens/ImgPais/argentina.png'
import bandChile from '../../assets/imagens/ImgPais/chile.png'
import bandFranca from '../../assets/imagens/ImgPais/franca.png'
import bandtalia from '../../assets/imagens/ImgPais/italia.png'
import bandPortugal from '../../assets/imagens/ImgPais/portugal.png'

import { Selection, SelectionButton, SelectionList } from './style'

import { filtrar, filtrarCountry } from '../../store/reducer'
import { RootReducer } from '../../store'

type Props = {
  category: string
}

const Select = ({ category }: Props) => {
  const [selectIsOpenWine, setSelectIsOpenWine] = useState(false)
  const [selectIsOpenCountry, setSelectIsOpenCountry] = useState(false)
  const { filtro, filtroCountry } = useSelector((s: RootReducer) => s.state)

  const categoryRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    const dropDownClose = (e: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node)
      ) {
        setSelectIsOpenWine(false)
        setSelectIsOpenCountry(false)
      }
    }

    document.addEventListener('mousedown', dropDownClose)

    return () => {
      document.addEventListener('mousedown', dropDownClose)
    }
  }, [])

  const handleOpenWine = () => {
    setSelectIsOpenWine(!selectIsOpenWine)
  }

  const handleOpenCountry = () => {
    setSelectIsOpenCountry(!selectIsOpenCountry)
  }

  return (
    <Selection
      onClick={category == 'wine' ? handleOpenWine : handleOpenCountry}
      ref={categoryRef}
    >
      <SelectionButton>
        {category == 'wine' ? (
          <h4>{filtro ? filtro : 'Todos'}</h4>
        ) : (
          <h4>{filtroCountry ? filtroCountry : 'Todos'}</h4>
        )}
        <div>
          {selectIsOpenWine || selectIsOpenCountry ? (
            <img src={vetorUp} alt="up - cima" />
          ) : (
            <img src={vetorDown} alt="down - baixo" />
          )}
        </div>
      </SelectionButton>

      {category == 'wine' ? (
        <>
          {selectIsOpenWine && (
            <SelectionList>
              <li onClick={() => dispatch(filtrar(''))}>
                <span>Todos</span>
              </li>
              <li onClick={() => dispatch(filtrar('Tinto'))}>
                <span>Tinto</span>
              </li>
              <li onClick={() => dispatch(filtrar('Branco'))}>
                <span>Branco</span>
              </li>
              <li onClick={() => dispatch(filtrar('Rose'))}>
                <span>Rosé</span>
              </li>
              <li onClick={() => dispatch(filtrar('Organico'))}>
                <span>Orgãnico</span>
              </li>
              <li onClick={() => dispatch(filtrar('Lata'))}>
                <span>Lata</span>
              </li>
            </SelectionList>
          )}
        </>
      ) : (
        <>
          {selectIsOpenCountry && (
            <SelectionList>
              <li onClick={() => dispatch(filtrarCountry(''))}>
                <span>Todos</span>
              </li>
              <li onClick={() => dispatch(filtrarCountry('Argentina'))}>
                <span>Argentina</span>
                <img src={bandArgentina} alt="" />
              </li>
              <li onClick={() => dispatch(filtrarCountry('Brasil'))}>
                <span>Brasil</span>
                <img src={bandBrasil} alt="" />
              </li>
              <li onClick={() => dispatch(filtrarCountry('Chile'))}>
                <span>Chile</span>
                <img src={bandChile} alt="" />
              </li>
              <li onClick={() => dispatch(filtrarCountry('Franca'))}>
                <span>Franca</span>
                <img src={bandFranca} alt="" />
              </li>
              <li onClick={() => dispatch(filtrarCountry('Itália'))}>
                <span>Itália</span>
                <img src={bandtalia} alt="" />
              </li>
              <li onClick={() => dispatch(filtrarCountry('Portugal'))}>
                <span>Portugal</span>
                <img src={bandPortugal} alt="" />
              </li>
            </SelectionList>
          )}
        </>
      )}
    </Selection>
  )
}

export default Select
