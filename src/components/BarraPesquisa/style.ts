import styled from 'styled-components'

export const CardSugestoes = styled.div`
  padding: 8px;
  color: #dc143c;

  h4 {
    width: 300px;
    text-align: center;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
  }
`

export const ListaSugestoes = styled.ul`
  margin-top: 24px;

  li {
    display: flex;
    align-items: center;
    column-gap: 16px;
    list-style: none;
    margin-bottom: 16px;
    font-size: 14px;

    span {
      margin-right: 8px;
      font-size: 12px;
    }
  }
`

export const Card = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  div {
    position: absolute;
    top: 0;
    right: 0;

    .img_country {
      width: 24px;
    }
  }

  .img_wine {
    max-height: 64px;
    height: 100%;
  }

  span {
    width: 80px;
  }
`
