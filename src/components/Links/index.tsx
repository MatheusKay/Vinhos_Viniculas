import { useEffect, useRef, useState } from 'react'

import BarraLinks from '../BarraLinks'

import * as S from './style'

const Links = () => {
  const [downDrinks, setDownDrinks] = useState(false)
  const dropDownDrinks = useRef<HTMLLIElement>(null)

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
    }

    document.addEventListener('mousedown', dropDownClose)

    return () => {
      document.addEventListener('mousedown', dropDownClose)
    }
  }, [])

  return (
    <S.Links>
      <li>
        <S.LinkR to="/">Home</S.LinkR>
      </li>
      <li>
        <S.LinkR to="/vinicolas">Vinicolas</S.LinkR>
      </li>
      <S.LinkDown ref={dropDownDrinks}>
        <div className="list_button">
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
        </div>
        {downDrinks && (
          <div className="list_down">
            <BarraLinks />
          </div>
        )}
      </S.LinkDown>
      <li>
        <S.LinkR to="/fale-conosco">Fale conosco</S.LinkR>
      </li>
    </S.Links>
  )
}

export default Links
