import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import vetorLogo from '../../assets/imagens/Logo.svg'
import vetorCesta from '../../assets/imagens/Vector_Cart.png'

import * as S from './style'

import SearchBar from '../BarraPesquisa'
import Links from '../Links'

import { Wines, useGetVinhosQuery } from '../../services/api'

import { CartOpen, openOrCloseMenu } from '../../store/reducer'
import CartBuy from '../../pages/Carrinho'

import { RootReducer } from '../../store'
import Menu from '../MenuMobile'

const Header = () => {
  const [visibleBar, setVisibleBar] = useState(false)
  const [inputClick, setInputClick] = useState(false)
  const [isTyping, setIsTyping] = useState('')

  const inputpesquisa = useRef<HTMLDivElement>(null)

  const { data: wines } = useGetVinhosQuery()

  const { openCart, listCart } = useSelector(
    (state: RootReducer) => state.state
  )
  const dispatch = useDispatch()

  const isMobile = window.matchMedia(
    'only screen and (max-width: 768px)'
  ).matches

  const handleFocus = () => {
    setInputClick(true)
    setVisibleBar(true)
  }

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(e.target.value)
  }

  useEffect(() => {
    const dropDownClose = (e: MouseEvent) => {
      if (
        inputpesquisa.current &&
        !inputpesquisa.current.contains(e.target as Node)
      ) {
        setInputClick(false)
        setVisibleBar(false)
      }
    }

    document.addEventListener('mousedown', dropDownClose)

    return () => {
      document.addEventListener('mousedown', dropDownClose)
    }
  }, [])

  const filterWines = (lWines: Wines[]) => {
    if (isTyping.length > 0) {
      const formatting = new RegExp(isTyping, 'i')

      const filter = lWines.filter((wine) => {
        return formatting.test(wine.title)
      })

      return filter
    }

    if (wines) {
      const listWines = wines.slice(0, 10)

      return listWines
    }

    return []
  }

  if (wines) {
    const barWines = filterWines(wines)

    return (
      <>
        <S.HeaderContainer>
          <div className="container">
            {isMobile && (
              <S.ContainerBtnMenu>
                <S.BtnMenu onClick={() => dispatch(openOrCloseMenu())}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </S.BtnMenu>
              </S.ContainerBtnMenu>
            )}
            <S.Logo to="/">
              <img src={vetorLogo} alt="Logo Five leaf clover" />
            </S.Logo>
            <S.ContainerInfos>
              <S.SearchContainer>
                <S.SearchContainerInput ref={inputpesquisa}>
                  <input
                    onClick={handleFocus}
                    onChange={(e) => handleTyping(e)}
                    type="text"
                    placeholder="Pesquise pelo seu vinho aqui"
                  />
                  {visibleBar && (
                    <div>
                      <SearchBar
                        vinhos={barWines}
                        clicked={inputClick}
                        isTyping={isTyping}
                      />
                    </div>
                  )}
                </S.SearchContainerInput>
                <S.CartContainer onClick={() => dispatch(CartOpen())}>
                  <p>Meu carrinho</p>
                  <img src={vetorCesta} alt="Meu carrinho" />
                </S.CartContainer>
              </S.SearchContainer>
              <div>
                <Links />
                <Menu />
              </div>
            </S.ContainerInfos>
          </div>
        </S.HeaderContainer>
        <CartBuy addWines={listCart} isOpen={openCart} />
      </>
    )
  }

  return <div>Carregando..</div>
}

export default Header
