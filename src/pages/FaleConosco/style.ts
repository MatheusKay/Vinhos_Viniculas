import styled from 'styled-components'
import { palette } from '../../styles/estiloGlobal'

export const Contact = styled.div`
  width: 100%;
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 40px;
    font-size: 40px;
    text-transform: uppercase;
    font-family: Vollkorn;
    letter-spacing: 0.33em;
  }

  p {
    margin-bottom: 96px;
    font-size: 24px;
    font-weight: 600;
  }
`

export const Form = styled.form`
  width: 50%;

  label {
    margin-bottom: 8px;
    display: block;
    font-size: 16px;
    font-weight: 600;
  }

  input,
  textarea {
    width: 100%;
    padding: 6px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid ${palette.blackColor};
    font-size: 14px;
  }

  textarea {
    min-height: 140px;
    resize: none;
  }

  .infos_pessoais {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;

    div {
      width: 60%;
    }
  }
`

export const Button = styled.button`
  padding: 10px 56px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: ${palette.secondary};
  color: ${palette.neutralColor};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`
