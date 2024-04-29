import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import stateReducer from './reducer'

export const store = configureStore({
  reducer: {
    state: stateReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
