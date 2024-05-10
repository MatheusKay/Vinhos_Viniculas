import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Vinhos {
  imgs: {
    img_url: string
    country_url: string
  }
  _id: string
  id: number
  title: string
  price: number
  sold: number
  favorites: number
  category: string
  country: string
  count: number
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-vinhos.vercel.app'
  }),
  endpoints: (builder) => ({
    getVinhos: builder.query<Vinhos[], void>({
      query: () => 'vinhos'
    })
  })
})

export const { useGetVinhosQuery } = api

export default api
