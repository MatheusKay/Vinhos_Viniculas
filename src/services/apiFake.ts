import vinho1 from '../assets/imagens/ImgVinhos/vinho1-argentino.jpg'
import vinho2 from '../assets/imagens/ImgVinhos/vinho1-chileno.jpg'
import vinho3 from '../assets/imagens/ImgVinhos/vinho1.png'
import brasil from '../assets/imagens/ImgPais/brasil.png'

export type Vinhos = {
  id: number
  nome: string
  imgVinho: string
  nacionalidade: string
  tipo: string
  nota: number
  volume: number
  preco: number
}

export const MockVinho: Vinhos[] = [
  {
    id: 1,
    imgVinho: vinho1,
    nacionalidade: brasil,
    nome: 'Pergola',
    preco: 190.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 2,
    imgVinho: vinho2,
    nacionalidade: brasil,
    nome: 'Sangue de boi',
    preco: 170.0,
    tipo: 'Vinho Tinto',
    volume: 1,
    nota: 9.5
  },
  {
    id: 3,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'Cantinho do Vale',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 4,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'Cantinho',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 5,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'do Vale',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 6,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'do Vale',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 7,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'do Vale',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 8,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'do Vale',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 9,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'do Vale',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 10,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'do Vale',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 11,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'do Vale',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  },
  {
    id: 12,
    imgVinho: vinho3,
    nacionalidade: brasil,
    nome: 'do Vale',
    preco: 120.0,
    tipo: 'Vinho Tinto',
    volume: 750,
    nota: 9.5
  }
]
