import Carrossel from '../../components/Carrossel'
import Section from '../../components/Secao'
import { ImgDiv } from '../../styles/estiloGlobal'

import imgDivisor from '../../assets/imagens/img_divisoria_seção.png'

import { useGetVinhosQuery } from '../../services/api'
import { wineHighlights, bestSellers } from '../../utility'

const Home = () => {
  const { data: wines } = useGetVinhosQuery()

  return (
    <>
      <Carrossel />
      {wines && <Section wines={bestSellers(wines)} title="Mais Vendidos" />}
      <ImgDiv
        src={imgDivisor}
        alt="Imagem representando os campos de vinhos com a logo do site"
      />
      {wines && <Section wines={wineHighlights(wines)} title="wineHighlights" />}
    </>
  )
}

export default Home
