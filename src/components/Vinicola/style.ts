import styled from 'styled-components'

type Props = {
  estaInvertido: boolean
}

export const ContainerVinicola = styled.div<Props>`
  margin-bottom: 15%;
  margin-top: 15%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.estaInvertido ? 'row-reverse' : 'row')};
  gap: 24px;

  img {
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

export const ContainerInfos = styled.div<Props>`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .text_desc {
    margin-top: 48px;
    font-size: 14px;
    line-height: 20px;
  }

  .text_num {
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: ${(props) => (props.estaInvertido ? 'row-reverse' : 'row')};

    span {
      padding: 12px;
      font-size: 24px;
      font-weight: 600;
      background-color: #dc143c;
      border-radius: 8px;
      color: #fff;
    }
  }
`

export const Titulo = styled.h3`
  margin-bottom: 8px;
  font-size: 24px;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  z-index: 1;
`

export const InfosVinicola = styled.div<Props>`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  div {
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.estaInvertido ? 'row' : 'row-reverse')};
    column-gap: 20px;

    span {
      width: 50px;
      height: 45px;
      padding: 8px 12px;
      border: 1px solid #dc143c;
      border-radius: 8px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    p {
      font-size: 16px;
      font-weight: 600;

      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
`
