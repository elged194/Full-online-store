// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/data/' }),
  endpoints: (builder) => ({
    getproductByName: builder.query({
      query: (name) => `data.json`,
      // query: (id) => `prodect-detalis/:${id}`,
      // query: (id) => `data.json/prodect-detalis/:id`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproductByNameQuery } = productApi