import { useDispatch, useSelector } from 'react-redux'

import Links from '../Links'

import vetorLogo from '../../assets/imagens/Logo.svg'

import * as S from './style'

import { RootReducer } from '../../store'
import { openOrCloseMenu } from '../../store/reducer'

const Menu = () => {
  const { menuMobile } = useSelector((s: RootReducer) => s.state)

  const dispatch = useDispatch()

  return (
    <>
      {menuMobile && (
        <S.MenuMobile>
          <S.MenuContainer>
            <S.MenuHeader>
              <img src={vetorLogo} alt="Logo Five Leaf Clover" />
              <S.BtnClose onClick={() => dispatch(openOrCloseMenu())}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </S.BtnClose>
            </S.MenuHeader>
            <Links />
          </S.MenuContainer>
          <span
            className="overlay"
            onClick={() => dispatch(openOrCloseMenu())}
          ></span>
        </S.MenuMobile>
      )}
    </>
  )
}

export default Menu
