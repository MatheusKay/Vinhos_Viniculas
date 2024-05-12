import styled from 'styled-components'

import { palette } from '../../styles/estiloGlobal'

export const Selection = styled.div`
  margin-top: 16px;
  position: relative;
  cursor: pointer;
`

export const SelectionButton = styled.div`
  margin-top: 0.5rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  background-color: ${palette.neutralColor};
  color: ${palette.primary};

  h4 {
    margin: 0;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }
`

export const SelectionList = styled.ul`
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  left: 0;
  z-index: 2;
  border-radius: 0.375rem;
  border: 1px solid ${palette.primary};
  background-color: ${palette.neutralColor};
  color: ${palette.primary};

  li {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    img {
      width: 32px;
      border-radius: 4px;
    }

    span {
      margin-left: 8px;
    }

    &:hover {
      background-color: ${palette.primary};
      color: ${palette.neutralColor};
    }
  }
`
