import { useState } from 'react'

import vetorLogo from '../../assets/imagens/Logo_Five_leaf_clover.png'
import vetorCesta from '../../assets/imagens/Vector_Cart.png'
import vetorDropdown from '../../assets/imagens/arrow-down-circle.svg'

import {
  HeaderContainer,
  Logo,
  ContainerInfos,
  ContainerPesquisa,
  ContainerPesquisaInput,
  ContainerCarrinho,
  Links,
  LinkDown,
  LinkR
} from './style'

import BarraPesquisa from '../BarraPesquisa'
import BarraLinks from '../BarraLinks'

const Header = () => {
  const [barraVisivel, setBarraVisivel] = useState(false)
  const [inputClick, setInputClick] = useState(false)
  const [estaDigitando, setEstaDigitando] = useState('')
  const [downVinhos, setDownVinhos] = useState(false)
  const [downBebidas, setDownBebidas] = useState(false)

  const handleFoco = () => {
    setInputClick(true)
    setBarraVisivel(true)
  }

  const handleBlur = () => {
    setInputClick(false)
    setBarraVisivel(false)
    setDownBebidas(false)
    setDownVinhos(false)
  }

  const handleDigitando = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstaDigitando(e.target.value)

    if (estaDigitando) {
      setInputClick(false)
      setBarraVisivel(true)
    }
  }

  const handleAbriuFechouVinhos = () => {
    setDownVinhos(!downVinhos)
    setDownBebidas(false)
  }

  const handleAbriuFechouBebidas = () => {
    setDownVinhos(false)
    setDownBebidas(!downBebidas)
  }

  return (
    <HeaderContainer>
      <div className="container">
        <Logo>
          <img src={vetorLogo} alt="Logo Five leaf clover" />
          <h1>Five Leaf Clover</h1>
        </Logo>
        <ContainerInfos>
          <ContainerPesquisa>
            <ContainerPesquisaInput>
              <input
                onFocus={handleFoco}
                onBlur={handleBlur}
                onChange={(e) => handleDigitando(e)}
                type="text"
                placeholder="Pesquise pelo seu vinho aqui"
              />
              {barraVisivel && (
                <div>
                  <BarraPesquisa clicado={inputClick} />
                </div>
              )}
            </ContainerPesquisaInput>
            <ContainerCarrinho>
              <a href="">Meu carrinho</a>
              <img src={vetorCesta} alt="Meu carrinho" />
            </ContainerCarrinho>
          </ContainerPesquisa>
          <div>
            <Links>
              <LinkDown>
                <LinkR to="/produtos">Produtos</LinkR>
                <button onClick={handleAbriuFechouVinhos} onBlur={handleBlur}>
                  <img src={vetorDropdown} alt="Dropdown dos vinhos" />
                </button>
                {downVinhos && (
                  <div>
                    <BarraLinks vinhos={downVinhos} />
                  </div>
                )}
              </LinkDown>
              <li>
                <LinkR to="/vinicolas">Vinicolas</LinkR>
              </li>
              <LinkDown>
                <LinkR to="/produtos">Bebidas</LinkR>
                <button onClick={handleAbriuFechouBebidas} onBlur={handleBlur}>
                  <img src={vetorDropdown} alt="Dropdown das bebidas" />
                </button>
                {downBebidas && (
                  <div>
                    <BarraLinks vinhos={downVinhos} />
                  </div>
                )}
              </LinkDown>
              <li>
                <LinkR to="/">Fale conosco</LinkR>
              </li>
            </Links>
          </div>
        </ContainerInfos>
      </div>
    </HeaderContainer>
  )
}

export default Header
