import styled from 'styled-components'

export const Slide = styled.div`
  width: 1200px;
  margin-top: 24px;
  position: relative;

  img {
    width: 100%;
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    color: #ccc;
  }
`

export const BotaoSlide = styled.a`
  margin-top: 16px;
  margin-bottom: 64px;
  padding: 16px 36px;
  border: 1px solid #ccc;
  border-radius: 46px;
  background-color: transparent;
  text-decoration: none;
  color: #ccc;
`
