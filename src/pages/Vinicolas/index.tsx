import Vinicola from '../../components/Vinicola'

import abreuGarcia from '../../assets/imagens/ImgVinicolas/vinicolas-no-brasil-abreu-garcia.jpg'
import lidioCarraro from '../../assets/imagens/ImgVinicolas/vinicolas-no-brasil-lidio-carraro.jpg'
import terraNova from '../../assets/imagens/ImgVinicolas/vinicolas-no-brasil-vinicola-terranova.png'
import villaFrancioni from '../../assets/imagens/ImgVinicolas/vinicolas-no-brasil-vinicola-villa-francioni.png'
import posterVinicola from '../../assets/imagens/Poster_vinicola.png'
import logo from '../../assets/imagens/Logo_Five_leaf_clover.svg'

import { ContainerImg, SecaoInfos, Poster, Divisor } from './style'

type MockVinicolas = {
  id: number
  titulo: string
  descricao: string
  linkImg: string
  altImg: string
  estaInvertida?: boolean
  localizacao: string
  site: string
}

const mockVinicolas: MockVinicolas[] = [
  {
    id: 1,
    titulo: 'Vinícola Abreu Garcia',
    descricao:
      'Localizada na Serra Catarinense, em Campo Belo do Sul, a Vinícola Abreu Garcia produz seus vinhos de altitude nas regiões mais elevadas do estado. Embora a empresa tenha sido fundada em 2006, já apresenta uma tradição consolidada, com mais de onze premiações nacionais e internacionais.',
    linkImg: abreuGarcia,
    altImg:
      'Imagem da faixada da vinicola Vinícola Abreu Garcia Vinhos de Altitude',
    estaInvertida: false,
    localizacao: 'Serra Catarinense, Campo Belo do Sul - SC',
    site: 'www.abreugarcia.com.br'
  },
  {
    id: 2,
    titulo: 'Vinícola Lidio Carraro',
    descricao:
      'A vinícola Lidio Carraro teve início com a implantação dos vinhedos em duas regiões do Rio Grande do Sul, em 1998: Vale dos Vinhedos (Bento Gonçalves) e Serra do Sudeste (Encruzilhada do Sul). A execução ocorreu mediante um estudo climático minucioso, com pesquisa de clones e mapeamento de solos. Na época, foi um processo pioneiro no país. Desde então, a vinícola elabora uma extensa cartela de vinhos, combinando a tradição do Velho Mundo com as inovações do Novo Mundo. Para receber seus visitantes, apostam em um enoturismo aconchegante e familiar, com a apresentação da história da empresa e filosofia de trabalho que gere todos os processos da empresa.',
    linkImg: lidioCarraro,
    altImg: 'Imagem da faixada da vinicola Vinícola Lidio Carraro',
    estaInvertida: true,
    localizacao: 'Vale dos Vinhedos - RS',
    site: 'www.lidiocarraro.com/br'
  },
  {
    id: 3,
    titulo: 'Vinícola Terranova',
    descricao:
      'A Vinícola Terranova faz parte da Miolo Wine Group e está localizada no Vale do São Francisco, na Bahia. O estado é, no momento, o único lugar no mundo capaz de realizar mais de uma safra por ano, podendo chegar a três. O clima quente da região permite a criação de vinhos encorpados e com alta estrutura aromática.',
    linkImg: terraNova,
    altImg: 'Imagem da faixada da vinicola Vinícola Terranova',
    estaInvertida: false,
    localizacao: 'Vale do São Francisco - BA',
    site: 'www.miolo.com.br'
  },
  {
    id: 4,
    titulo: 'Vinícola Villa Francioni',
    descricao:
      'A Villa Francioni é nossa 04ª sugestão de vinícola brasileira para você conhecer. Localizada em São Joaquim, no estado de Santa Catarina, foi fundada por Manoel Dilor de Freitas com a missão de “enriquecer a celebração da vida ao sabor de um elegante vinho elaborado com amor e arte.” Quanto à visita, ela proporciona um encontro exclusivo entre a arte e a vinicultura, sendo orientada por um guia especializado, na qual se percorre todos os estágios da elaboração dos vinhos da casa.',
    linkImg: villaFrancioni,
    altImg: 'Imagem da faixada da vinicola Vinícola Villa Francioni',
    estaInvertida: true,
    localizacao: 'São Joaquim - SC',
    site: 'www.villafrancioni.com.br'
  }
]

const Vinicolas = () => (
  <>
    <Poster>
      <img src={posterVinicola} alt="Imagem que representa os campos de uvas" />
      <div>
        <h2>Vinícolas do Brasil</h2>
        <p>Candidatos ao enoturismo que valem muito a pena conhecer</p>
        <img src={logo} alt="" />
      </div>
    </Poster>
    <SecaoInfos className="container">
      <div>
        <h2>Início</h2>
        <p>
          Para quem ama explorar a cultura e novidades do mundo dos vinhos, o
          enoturismo é indispensável! Com ele, é possível conhecer e se
          apaixonar por novos rótulos, descobrir como a produção das suas
          bebidas favoritas funciona, visitar paisagens de tirar o fôlego e
          muito mais!
        </p>
        <Divisor>
          <span className="ball_small"></span>
          <span className="ball_medium"></span>
          <span className="ball_big"></span>
          <span className="ball_medium"></span>
          <span className="ball_small"></span>
        </Divisor>
        <p>
          E não são apenas as regiões vitiviníferas estrangeiras que têm muito a
          oferecer em termos de experiências enoturísticas. Inúmeras vinícolas
          no Brasil possuem passeios incríveis, degustação com rótulos
          premiados, museus, colheitas noturnas e diversas outras atrações.
        </p>
      </div>
      <ContainerImg>
        {mockVinicolas.map((vinicolaImg) => (
          <div key={vinicolaImg.id}>
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
          id={vinicola.id}
          localizacao={vinicola.localizacao}
          site={vinicola.site}
        />
      ))}
    </section>
  </>
)

export default Vinicolas
