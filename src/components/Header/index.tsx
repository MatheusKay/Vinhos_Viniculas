import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import vetorLogo from '../../assets/imagens/Logo_Five_leaf_clover.png'
import vetorCesta from '../../assets/imagens/Vector_Cart.png'

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

import { Vinhos, useGetVinhosQuery } from '../../services/api'

import { CartOpen } from '../../store/reducer'
import Carrinho from '../../pages/Carrinho'

import { RootReducer } from '../../store'

const Header = () => {
  const [barraVisivel, setBarraVisivel] = useState(false)
  const [inputClick, setInputClick] = useState(false)
  const [estaDigitando, setEstaDigitando] = useState('')
  const [downBebidas, setDownBebidas] = useState(false)

  const dropDownBebidas = useRef<HTMLLIElement>(null)
  const inputpesquisa = useRef<HTMLDivElement>(null)

  const { data: vinhos } = useGetVinhosQuery()

  const { openCart, listCart } = useSelector(
    (state: RootReducer) => state.state
  )
  const dispatch = useDispatch()

  const handleFoco = () => {
    setInputClick(true)
    setBarraVisivel(true)
  }

  const handleDigitando = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEstaDigitando(e.target.value)
  }

  const handleAbriuFechouBebidas = () => {
    setDownBebidas(!downBebidas)
  }

  useEffect(() => {
    const dropDownClose = (e: MouseEvent) => {
      if (
        dropDownBebidas.current &&
        !dropDownBebidas.current.contains(e.target as Node)
      ) {
        setDownBebidas(false)
      }

      if (
        inputpesquisa.current &&
        !inputpesquisa.current.contains(e.target as Node)
      ) {
        setInputClick(false)
        setBarraVisivel(false)
      }
    }

    document.addEventListener('mousedown', dropDownClose)

    return () => {
      document.addEventListener('mousedown', dropDownClose)
    }
  }, [])

  const filtrarVinhos = (lVinhos: Vinhos[]) => {
    if (estaDigitando.length > 0) {
      const formatacao = new RegExp(estaDigitando, 'i')

      const filtro = lVinhos.filter((vinho) => {
        return formatacao.test(vinho.title)
      })

      return filtro
    }

    if (vinhos) {
      const listaVinhos = vinhos.slice(0, 10)

      return listaVinhos
    }

    return []
  }

  if (vinhos) {
    const vinhosBarra = filtrarVinhos(vinhos)

    return (
      <>
        <HeaderContainer>
          <div className="container">
            <Logo to="/">
              <img src={vetorLogo} alt="Logo Five leaf clover" />
              <h1>Five Leaf Clover</h1>
            </Logo>
            <ContainerInfos>
              <ContainerPesquisa>
                <ContainerPesquisaInput ref={inputpesquisa}>
                  <input
                    onClick={handleFoco}
                    onChange={(e) => handleDigitando(e)}
                    type="text"
                    placeholder="Pesquise pelo seu vinho aqui"
                  />
                  {barraVisivel && (
                    <div>
                      <BarraPesquisa
                        vinhos={vinhosBarra}
                        clicado={inputClick}
                        estaDigitando={estaDigitando}
                      />
                    </div>
                  )}
                </ContainerPesquisaInput>
                <ContainerCarrinho onClick={() => dispatch(CartOpen())}>
                  <p>Meu carrinho</p>
                  <img src={vetorCesta} alt="Meu carrinho" />
                </ContainerCarrinho>
              </ContainerPesquisa>
              <div>
                <Links>
                  <li>
                    <LinkR to="/">Home</LinkR>
                  </li>
                  <li>
                    <LinkR to="/vinicolas">Vinicolas</LinkR>
                  </li>
                  <LinkDown ref={dropDownBebidas}>
                    <LinkR to="/produtos">Bebidas</LinkR>
                    <button onClick={handleAbriuFechouBebidas}>
                      {downBebidas ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-caret-up-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-caret-down-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      )}
                    </button>
                    {downBebidas && (
                      <div>
                        <BarraLinks />
                      </div>
                    )}
                  </LinkDown>
                  <li>
                    <LinkR to="/fale-conosco">Fale conosco</LinkR>
                  </li>
                </Links>
              </div>
            </ContainerInfos>
          </div>
        </HeaderContainer>
        <Carrinho addWines={listCart} isOpen={openCart} />
      </>
    )
  }

  return <div>Carregando..</div>
}

export default Header
