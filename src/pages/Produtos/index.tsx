import SecaoProdutos from '../../components/SecaoProdutos'
import { MockVinho } from '../../services/apiFake'

const Produtos = () => (
  <>
    <SecaoProdutos
      corFundo="Vinhos Tintos"
      nomeSecao="Vinhos Tintos"
      vinhos={MockVinho}
    />
    <SecaoProdutos
      corFundo="Vinhos Brancos"
      nomeSecao="Vinhos Brancos"
      vinhos={MockVinho}
    />
    <SecaoProdutos
      corFundo="Vinhos Roses"
      nomeSecao="Vinhos Roses"
      vinhos={MockVinho}
    />
    <SecaoProdutos
      corFundo="Bebidas"
      nomeSecao="Bebidas"
      eBebida={true}
      vinhos={MockVinho}
    />
  </>
)

export default Produtos
