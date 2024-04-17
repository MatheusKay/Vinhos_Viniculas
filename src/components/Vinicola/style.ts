import styled from 'styled-components'

import { Props } from '.'

export const ContainerVinicola = styled.div<
  Omit<Props, 'altImg' | 'linkImg' | 'descVinicola' | 'titulo'>
>`
  margin-bottom: 15%;
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.estaInvertido ? 'row-reverse' : 'row')};
  gap: 24px;

  img {
    height: 250px;
    border-radius: 16px;
  }
`

export const ContainerPoster = styled.div`
  max-width: 550px;
  width: 320px;
  position: relative;
  transition: width 1.5s ease-in-out;
  border-radius: 16px;
  box-shadow: 0px 8px 36px 0px;

  &:hover {
    width: 100%;
    transition: width 1.5s ease-in-out;
  }
`

export const ContainerInfos = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 14px;
    line-height: 20px;
  }
`

export const Titulo = styled.h3`
  margin-bottom: 8px;
  font-size: 24px;
`

export const Overlay = styled.div`
  width: 100%;
  height: 250px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  z-index: 1;
`
