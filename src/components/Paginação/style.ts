import styled from 'styled-components'

import { palette } from '../../styles/estiloGlobal'

export const Pagination = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 12px;
    font-size: 24px;
    font-weight: 600;
    color: ${palette.grayColor};
  }
`

export const Button = styled.a`
  padding: 8px;
  margin-right: 12px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid ${palette.grayColor};
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  color: ${palette.grayColor};
`
