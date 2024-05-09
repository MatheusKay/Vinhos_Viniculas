import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Vinhos } from '../../services/api'

type States = {
  filtro: string
  filtroCountry: string
  currentP: number
  openCart: boolean
  listCart: Vinhos[]
}

const initialState: States = {
  filtro: '',
  filtroCountry: '',
  currentP: 0,
  openCart: false,
  listCart: []
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
    CartOpen: (state) => {
      state.openCart = !state.openCart
    },
    AddCartList: (state, action: PayloadAction<Vinhos>) => {
      const find = state.listCart.find(
        (item) => item.title === action.payload.title
      )

      if (find) {
        alert('Esse vinho ja esta no seu carrinho confira-o por favor')

        state.openCart = true
      } else {
        state.listCart.push(action.payload)

        state.openCart = true
      }
    },
    RmvCartList: (state, action: PayloadAction<string>) => {
      const newList = state.listCart.filter(
        (item) => item.title !== action.payload
      )

      state.listCart = newList
    }
  }
})

export const {
  filtrar,
  filtrarCountry,
  currentP,
  CartOpen,
  AddCartList,
  RmvCartList
} = stateSlice.actions

export default stateSlice.reducer
