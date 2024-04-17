import Carrossel from '../../components/Carrossel'
import Secao from '../../components/Secao'

import { MockVinho } from '../../services/apiFake'

const Home = () => (
  <>
    <Carrossel />
    <Secao vinhos={MockVinho} titulo="Mais Vendidos" />
    <Secao vinhos={MockVinho} titulo="Destaques" />
  </>
)

export default Home
