import {
  FooterContainer,
  Titulo,
  Links,
  DescLoja,
  LinksSociais,
  FooterColor,
  FooterLinks,
  FooterInfo
} from './style'

import logo from '../../assets/imagens/Logo_Five_leaf_clover.png'

const Footer = () => {
  return (
    <footer>
      <FooterColor>
        <FooterContainer>
          <FooterInfo>
            <img src={logo} alt="" />
            <h2>Five leaf clover</h2>
          </FooterInfo>
          <FooterLinks>
            <section>
              <Titulo>Nossos Produtos</Titulo>
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
            </section>
            <section>
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
            </section>
          </FooterLinks>
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
          </div>
        </FooterContainer>
      </FooterColor>
    </footer>
  )
}

export default Footer
