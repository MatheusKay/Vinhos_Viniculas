import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Vinhos } from '../../services/api'

export interface WinesWithCount extends Vinhos {
  count: number
}

type States = {
  filtro: string
  filtroCountry: string
  currentP: number
  openCart: boolean
  listCart: Vinhos[]
  countAdd: number
}

const initialState: States = {
  filtro: '',
  filtroCountry: '',
  currentP: 0,
  openCart: false,
  listCart: [],
  countAdd: 1
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
    },
    addCount: (state, action: PayloadAction<WinesWithCount>) => {
      let count = action.payload.count

      if (count < 1) {
        count = action.payload.count + 2
      } else {
        count = action.payload.count + 1
      }

      const newUnitPrice = action.payload.price / (count - 1)
      const newPrice = newUnitPrice * count

      state.listCart = state.listCart.map((item) => {
        if (item.title === action.payload.title) {
          return {
            ...item,
            price: newPrice,
            count: count
          }
        }

        return item
      })
    },
    rmvCount: (state, action: PayloadAction<WinesWithCount>) => {
      if (action.payload.count >= 2) {
        const count = action.payload.count

        const newUnitPrice = action.payload.price / count
        const newPrice = action.payload.price - newUnitPrice

        const countRmv = count - 1

        state.listCart = state.listCart.map((item) => {
          if (item.title === action.payload.title) {
            return {
              ...item,
              price: newPrice,
              count: countRmv
            }
          }

          return item
        })
      }
    }
  }
})

export const {
  filtrar,
  filtrarCountry,
  currentP,
  CartOpen,
  AddCartList,
  RmvCartList,
  addCount,
  rmvCount
} = stateSlice.actions

export default stateSlice.reducer
