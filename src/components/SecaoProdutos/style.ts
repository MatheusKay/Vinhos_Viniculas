import styled from 'styled-components'
import { Props } from '.'

// ${(props) => props.corFundo === 'Vinhos Tintos' ? '#8b0000e6' : props.corFundo === 'Vinhos Brancos' ? '#DBC286' : props.corFundo === 'Vinhos Roses' ? '#D95959' : #8b0000e6'}

// export const Secao = styled.section<
//   Omit<Props, 'vinhos' | 'nomeSecao' | 'eBebida'>
// >`
//   background-color: ${(props) =>
//     props.corFundo === 'Vinhos Tintos'
//       ? '#8b0000'
//       : props.corFundo === 'Vinhos Brancos'
//         ? '#DBC286'
//         : '#D95959'};
//   color: white;
// `

export const Secao = styled.section`
  color: black;
`

export const Titulo = styled.h2`
  margin-top: 56px;
  padding: 16px;
  text-align: center;
`

export const Links = styled.ul`
  margin-top: 24px;
  display: flex;
  justify-content: center;

  li {
    margin-right: 16px;
    list-style: none;

    a {
      padding: 8px;
      text-decoration: none;
    }
  }
`

export const ListaVinhos = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 18px;
`
