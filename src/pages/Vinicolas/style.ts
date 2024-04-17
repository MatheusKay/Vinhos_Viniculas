import styled from 'styled-components'

export const SecaoInfos = styled.section`
  margin-bottom: 15%;

  h2 {
    margin-top: 56px;
    text-align: center;
  }

  p {
    width: 80%;
    margin: 24px auto 56px auto;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`

export const ContainerImg = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;

  img {
    width: 180px;
    height: 360px;
    margin: 0 auto;
    object-fit: cover;
    box-shadow: 0px 8px 36px 0px;
    border-radius: 16px;
  }

  > div {
    position: relative;
  }
`

export const Overlay = styled.div`
  width: 180px;
  height: 360px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  z-index: 1;
`
