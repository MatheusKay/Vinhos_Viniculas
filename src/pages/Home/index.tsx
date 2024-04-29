import Carrossel from '../../components/Carrossel'
import Secao from '../../components/Secao'
import { ImgDiv } from '../../styles/estiloGlobal'

import imgDivisor from '../../assets/imagens/img_divisoria_seção.png'

import { useGetVinhosQuery } from '../../services/api'
import { destaques, maisVendidos } from '../../utility'

const Home = () => {
  const { data: vinhos } = useGetVinhosQuery()

  return (
    <>
      <Carrossel />
      {vinhos && <Secao vinhos={maisVendidos(vinhos)} titulo="Mais Vendidos" />}
      <ImgDiv
        src={imgDivisor}
        alt="Imagem representando os campos de vinhos com a logo do site"
      />
      {vinhos && <Secao vinhos={destaques(vinhos)} titulo="Destaques" />}
    </>
  )
}

export default Home
