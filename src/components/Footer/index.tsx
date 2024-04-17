import {
  FooterContainer,
  Titulo,
  Links,
  DescLoja,
  LinksSociais,
  FooterColor
} from './style'

const Footer = () => {
  return (
    <footer>
      <FooterColor>
        <FooterContainer className="container">
          <div>
            <Titulo>Conteudos</Titulo>
            <Links>
              <li>
                <a href="">Vinhos Tintos</a>
              </li>
              <li>
                <a href="">Vinhos Brancos</a>
              </li>
              <li>
                <a href="">Vinhos Roses</a>
              </li>
              <li>
                <a href="">Vinhos Organicos</a>
              </li>
              <li>
                <a href="">Vinhos Lata</a>
              </li>
            </Links>
          </div>
          <div>
            <Titulo>Categorias</Titulo>
            <Links>
              <li>
                <a href="">Produtos</a>
              </li>
              <li>
                <a href="">Vinicolas</a>
              </li>
              <li>
                <a href="">Bebidas</a>
              </li>
              <li>
                <a href="">Fale Conosco</a>
              </li>
            </Links>
          </div>
          <div>
            <Titulo>Sobre a loja</Titulo>
            <DescLoja>
              Bem-vindo à nossa loja de vinhos! Oferecemos uma ampla seleção de
              vinhos finos de todo o mundo, cuidadosamente selecionados para
              satisfazer os paladares mais exigentes. Nossa equipe apaixonada e
              experiente está pronta para ajudá-lo a encontrar o vinho perfeito
              para qualquer ocasião. Visite nosso site e descubra o maravilhoso
              mundo dos vinhos.
            </DescLoja>
          </div>
        </FooterContainer>
        <LinksSociais>
          <Titulo>Redes Sociais</Titulo>
          <ul>
            <li>
              <a href="">Intagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </LinksSociais>
      </FooterColor>
    </footer>
  )
}

export default Footer
