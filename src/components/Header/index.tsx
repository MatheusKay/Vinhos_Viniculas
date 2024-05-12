import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import vetorLogo from '../../assets/imagens/Logo.svg'
import vetorCesta from '../../assets/imagens/Vector_Cart.png'

import * as S from './style'

import SearchBar from '../BarraPesquisa'
import BarraLinks from '../BarraLinks'

import { Wines, useGetVinhosQuery } from '../../services/api'

import { CartOpen } from '../../store/reducer'
import CartBuy from '../../pages/Carrinho'

import { RootReducer } from '../../store'

const Header = () => {
  const [visibleBar, setVisibleBar] = useState(false)
  const [inputClick, setInputClick] = useState(false)
  const [isTyping, setIsTyping] = useState('')
  const [downDrinks, setDownDrinks] = useState(false)

  const dropDownDrinks = useRef<HTMLLIElement>(null)
  const inputpesquisa = useRef<HTMLDivElement>(null)

  const { data: wines } = useGetVinhosQuery()

  const { openCart, listCart } = useSelector(
    (state: RootReducer) => state.state
  )
  const dispatch = useDispatch()

  const handleFocus = () => {
    setInputClick(true)
    setVisibleBar(true)
  }

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(e.target.value)
  }

  const handleOpenClose = () => {
    setDownDrinks(!downDrinks)
  }

  useEffect(() => {
    const dropDownClose = (e: MouseEvent) => {
      if (
        dropDownDrinks.current &&
        !dropDownDrinks.current.contains(e.target as Node)
      ) {
        setDownDrinks(false)
      }

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
                <S.Links>
                  <li>
                    <S.LinkR to="/">Home</S.LinkR>
                  </li>
                  <li>
                    <S.LinkR to="/vinicolas">Vinicolas</S.LinkR>
                  </li>
                  <S.LinkDown ref={dropDownDrinks}>
                    <S.LinkR to="/produtos">Bebidas</S.LinkR>
                    <button onClick={handleOpenClose}>
                      {downDrinks ? (
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
                    {downDrinks && (
                      <div>
                        <BarraLinks />
                      </div>
                    )}
                  </S.LinkDown>
                  <li>
                    <S.LinkR to="/fale-conosco">Fale conosco</S.LinkR>
                  </li>
                </S.Links>
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
