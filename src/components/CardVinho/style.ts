import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  position: relative;
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
  top: 16px;
  right: 16px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

export const Titulo = styled.h3`
  margin-top: 16px;
  text-align: center;
  font-size: 16px;
`

export const Tags = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;

  p {
    margin: 0 8px;
    font-size: 14px;
  }
`

export const Preco = styled.p`
  text-align: center;
  font-weight: bold;
`

export const AddBotao = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background-color: #ccc;
  cursor: pointer;
`
