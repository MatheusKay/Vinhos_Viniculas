import styled from 'styled-components'

export const Selection = styled.div`
  position: relative;
  cursor: pointer;
`

export const SelectionButton = styled.div`
  margin-top: 0.5rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 1px solid #dc143c;
  background-color: #fff;
  color: #dc143c;

  h4 {
    margin: 0;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }
`

export const SelectionList = styled.ul`
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  left: 0;
  z-index: 2;
  border-radius: 0.375rem;
  border: 1px solid #dc143c;
  background-color: #fff;
  color: #dc143c;

  li {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;

    img {
      width: 32px;
      border-radius: 4px;
    }

    span {
      margin-left: 8px;
    }

    &:hover {
      background-color: #dc143c;
      color: #fff;
    }
  }
`
