import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { media } from '../../styles/estiloGlobal'

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: ${media.mobile}) {
    display: none;
  }
`
export const LinkR = styled(Link)`
  color: #fff;
`

export const LinkDown = styled.li`
  position: relative;

  a {
    margin-right: 8px;
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;

    svg {
      fill: #fff;
    }
  }

  .list_button {
    display: flex;
    align-items: center;
  }

  .list_down {
    width: 200px;
    position: absolute;
    top: 24px;
    left: 0;
    background-color: white;
    z-index: 1;
  }
`
