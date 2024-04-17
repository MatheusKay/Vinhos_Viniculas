import Vinicola from '../../components/Vinicola'

import abreuGarcia from '../../assets/imagens/ImgVinicolas/vinicolas-no-brasil-abreu-garcia.jpg'
import lidioCarraro from '../../assets/imagens/ImgVinicolas/vinicolas-no-brasil-lidio-carraro.jpg'
import terraNova from '../../assets/imagens/ImgVinicolas/vinicolas-no-brasil-vinicola-terranova.jpg'
import villaFrancioni from '../../assets/imagens/ImgVinicolas/vinicolas-no-brasil-vinicola-villa-francioni.png'

import { ContainerImg, SecaoInfos, Overlay } from './style'

type MockVinicolas = {
  id: number
  titulo: string
  descricao: string
  linkImg: string
  altImg: string
  estaInvertida?: boolean
}

const mockVinicolas: MockVinicolas[] = [
  {
    id: 1,
    titulo: 'Vinícola Abreu Garcia Vinhos de Altitude',
    descricao:
      'Localizada na Serra Catarinense, em Campo Belo do Sul, a Vinícola Abreu Garcia produz seus vinhos de altitude nas regiões mais elevadas do estado. Embora a empresa tenha sido fundada em 2006, já apresenta uma tradição consolidada, com mais de onze premiações nacionais e internacionais.',
    linkImg: abreuGarcia,
    altImg:
      'Imagem da faixada da vinicola Vinícola Abreu Garcia Vinhos de Altitude',
    estaInvertida: false
  },
  {
    id: 2,
    titulo: 'Vinícola Lidio Carraro',
    descricao:
      'A vinícola Lidio Carraro teve início com a implantação dos vinhedos em duas regiões do Rio Grande do Sul, em 1998: Vale dos Vinhedos (Bento Gonçalves) e Serra do Sudeste (Encruzilhada do Sul). A execução ocorreu mediante um estudo climático minucioso, com pesquisa de clones e mapeamento de solos. Na época, foi um processo pioneiro no país. Desde então, a vinícola elabora uma extensa cartela de vinhos, combinando a tradição do Velho Mundo com as inovações do Novo Mundo. Para receber seus visitantes, apostam em um enoturismo aconchegante e familiar, com a apresentação da história da empresa e filosofia de trabalho que gere todos os processos da empresa.',
    linkImg: lidioCarraro,
    altImg: 'Imagem da faixada da vinicola Vinícola Lidio Carraro',
    estaInvertida: true
  },
  {
    id: 3,
    titulo: 'Vinícola Terranova',
    descricao:
      'A Vinícola Terranova faz parte da Miolo Wine Group e está localizada no Vale do São Francisco, na Bahia. O estado é, no momento, o único lugar no mundo capaz de realizar mais de uma safra por ano, podendo chegar a três. O clima quente da região permite a criação de vinhos encorpados e com alta estrutura aromática.',
    linkImg: terraNova,
    altImg: 'Imagem da faixada da vinicola Vinícola Terranova',
    estaInvertida: false
  },
  {
    id: 4,
    titulo: 'Vinícola Villa Francioni',
    descricao:
      'A Villa Francioni é nossa 04ª sugestão de vinícola brasileira para você conhecer. Localizada em São Joaquim, no estado de Santa Catarina, foi fundada por Manoel Dilor de Freitas com a missão de “enriquecer a celebração da vida ao sabor de um elegante vinho elaborado com amor e arte.” Quanto à visita, ela proporciona um encontro exclusivo entre a arte e a vinicultura, sendo orientada por um guia especializado, na qual se percorre todos os estágios da elaboração dos vinhos da casa.',
    linkImg: villaFrancioni,
    altImg: 'Imagem da faixada da vinicola Vinícola Villa Francioni',
    estaInvertida: true
  }
]

const Vinicolas = () => (
  <>
    <SecaoInfos className="container">
      <div>
        <h2>04 vinícolas no Brasil que valem a pena conhecer!</h2>
        <p>
          Para quem ama explorar a cultura e novidades do mundo dos vinhos, o
          enoturismo é indispensável! Com ele, é possível conhecer e se
          apaixonar por novos rótulos, descobrir como a produção das suas
          bebidas favoritas funciona, visitar paisagens de tirar o fôlego e
          muito mais!
          <br />
          <br />E não são apenas as regiões vitiviníferas estrangeiras que têm
          muito a oferecer em termos de experiências enoturísticas. Inúmeras
          vinícolas no Brasil possuem passeios incríveis, degustação com rótulos
          premiados, museus, colheitas noturnas e diversas outras atrações.
        </p>
      </div>
      <ContainerImg>
        {mockVinicolas.map((vinicolaImg) => (
          <div key={vinicolaImg.id}>
            <Overlay />
            <img src={vinicolaImg.linkImg} alt={vinicolaImg.altImg} />
          </div>
        ))}
      </ContainerImg>
    </SecaoInfos>
    <section>
      {mockVinicolas.map((vinicola) => (
        <Vinicola
          key={vinicola.id}
          linkImg={vinicola.linkImg}
          altImg={vinicola.altImg}
          titulo={vinicola.titulo}
          descVinicola={vinicola.descricao}
          estaInvertido={vinicola.estaInvertida}
        />
      ))}
    </section>
  </>
)

export default Vinicolas
