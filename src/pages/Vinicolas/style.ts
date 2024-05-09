import styled from 'styled-components'

export const SecaoInfos = styled.section`
  margin-bottom: 15%;

  h2 {
    margin-top: 56px;
    text-align: center;
    font-size: 32px;
    letter-spacing: 0.32em;
    color: #303030;s
  }

  p {
    width: 80%;
    margin: 64px auto 56px auto;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`

export const Poster = styled.section`
  position: relative;
  color: #fff;

  > img {
    width: 100%;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 40px;
    position: absolute;
    top: 0;
    left: 0;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 16px;
      font-weight: 600;
    }

    img {
      width: 104px;
    }
  }
`

export const ContainerImg = styled.div`
  width: 100%;
  margin-top: 80px;
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
    margin: 0 auto;
  }
`

export const Divisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;

  .ball_small {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #6b0d2f;
  }

  .ball_medium {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #dc143c;
  }

  .ball_big {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #6b0d2f;
  }
`
