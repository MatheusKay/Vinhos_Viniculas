import styled from 'styled-components'

type Props = {
  margin: string
}

export const Card = styled.div<Props>`
  margin-right: ${(props) => props.margin};

  > div {
    max-height: 480px;
    height: 100%;
    padding: 16px;
    position: relative;
    border: 2px solid #303030;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
  }
`

export const CardImgVinho = styled.div`
  display: flex;
  justify-content: center;

  > img {
    height: 250px;
  }
`

export const CardImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 32px;
    height: 32px;
    border-radius: 0 6px 0 8px;
  }
`

export const Titulo = styled.h3`
  min-height: 75px;
  margin-bottom: 36px;
  text-align: center;
  font-size: 18px;
`

export const Tags = styled.div`
  margin: 12px 0;
  display: flex;
  justify-content: center;
  column-gap: 8px;

  span {
    min-width: 96px;
    padding: 8px;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    background-color: #ccc;
  }
`

export const Preco = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #518c16;
`

export const AddBotao = styled.button`
  width: 100%;
  padding: 17px 86px;
  border: none;
  border-radius: 0 0 8px 8px;
  background-color: #dc143c;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`
