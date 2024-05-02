import styled from 'styled-components'

export const CardSugestoes = styled.div`
  padding: 8px;
  color: #dc143c;
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
  justify-content: space-around;
  position: relative;

  div {
    position: absolute;
    top: 0;
    left: 0;

    .img_country {
      width: 24px;
    }
  }

  .img_wine {
    width: 16px;
  }
`
