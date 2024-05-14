import styled from 'styled-components'

import { LinkDown, Links } from '../Links/style'
import { palette } from '../../styles/estiloGlobal'

export const MenuMobile = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  .overlay {
    width: 25%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const MenuContainer = styled.section`
  width: 75%;
  height: 100%;
  padding: 16px;
  background-color: ${palette.primary};

  img {
    width: 8em;
  }

  ${Links} {
    display: flex;
    flex-direction: column;

    li {
      padding: 16px;
    }

    ${LinkDown} {
      flex-direction: column;
      align-items: unset;

      .list_button {
        display: flex;
        align-items: center;
      }

      .list_down {
        width: 100%;
        position: unset;
      }
    }
  }
`

export const MenuHeader = styled.section`
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BtnClose = styled.button`
  padding: 8px;
  color: ${palette.neutralColor};
  background-color: transparent;
  border: 2px solid ${palette.neutralColor};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${palette.neutralColor};
    color: ${palette.primary};
  }
`
