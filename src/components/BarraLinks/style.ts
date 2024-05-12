import styled from 'styled-components'

import { palette } from '../../styles/estiloGlobal'

export const LinksVinhos = styled.ul`
  li {
    padding: 16px;
    list-style: none;

    a {
      color: ${palette.primary};
    }

    &:hover {
      background-color: ${palette.primary};

      a {
        color: ${palette.neutralColor};
      }
    }
  }
`
