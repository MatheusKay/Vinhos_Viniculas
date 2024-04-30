import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Vinhos } from '../../services/api'

type States = {
  filtro: string
  filtroCountry: string
  currentP: number
  estaDigitando: string
  barraVisivel: boolean
  inputClick: boolean
  downVinhos: boolean
  downBebidas: boolean
  listWines: Vinhos[]
}

const initialState: States = {
  filtro: '',
  filtroCountry: '',
  currentP: 0,
  estaDigitando: '',
  barraVisivel: false,
  inputClick: false,
  downVinhos: false,
  downBebidas: false,
  listWines: []
}

const stateSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {
    filtrar: (state, action: PayloadAction<string>) => {
      state.filtro = action.payload
    },
    filtrarCountry: (state, action: PayloadAction<string>) => {
      state.filtroCountry = action.payload
    },
    currentP: (state, action: PayloadAction<number>) => {
      state.currentP = action.payload
    },
    search: (state, action: PayloadAction<string>) => {
      state.estaDigitando = action.payload
    },
    handleSearching: (state) => {
      state.inputClick = false
      state.barraVisivel = true
    },
    handleFocus: (state) => {
      state.inputClick = true
      state.barraVisivel = true
    },
    handleBlur: (state) => {
      state.inputClick = false
      state.barraVisivel = false
      state.downBebidas = false
      state.downVinhos = false
    },
    handleOpenCloseWines: (state) => {
      state.downVinhos = !state.downVinhos
      state.downBebidas = false
    },
    handleOpenCloseDrinks: (state) => {
      state.downBebidas = !state.downVinhos
      state.downVinhos = false
    },
    controlList: (state, action: PayloadAction<Vinhos[]>) => {
      state.listWines = action.payload
    }
  }
})

export const {
  filtrar,
  filtrarCountry,
  currentP,
  handleBlur,
  handleFocus,
  handleOpenCloseDrinks,
  handleOpenCloseWines,
  search,
  handleSearching,
  controlList
} = stateSlice.actions

export default stateSlice.reducer
