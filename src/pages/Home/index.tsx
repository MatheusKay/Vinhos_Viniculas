import { useDispatch, useSelector } from 'react-redux'

import Carrossel from '../../components/Carrossel'
import Secao from '../../components/Secao'
import { ImgDiv } from '../../styles/estiloGlobal'

import imgDivisor from '../../assets/imagens/img_divisoria_seção.png'

import { useGetVinhosQuery } from '../../services/api'
import { destaques, maisVendidos } from '../../utility'
import { RootReducer } from '../../store'
import { useEffect } from 'react'

const Home = () => {
  const { data: vinhos } = useGetVinhosQuery()
  const { listWines } = useSelector((state: RootReducer) => state.state)

  const dispatch = useDispatch()

  useEffect(() => {
    if (vinhos) {
      destaques(vinhos, dispatch)
    }
  }, [dispatch, vinhos])

  return (
    <>
      <Carrossel />
      {vinhos && <Secao vinhos={maisVendidos(vinhos)} titulo="Mais Vendidos" />}
      <ImgDiv
        src={imgDivisor}
        alt="Imagem representando os campos de vinhos com a logo do site"
      />
      {vinhos && <Secao vinhos={listWines} titulo="Destaques" />}
    </>
  )
}

export default Home
