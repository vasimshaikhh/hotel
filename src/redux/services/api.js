import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:9000/'
    }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (dt) => ({
                url:'/signup',
                method: 'POST',
                body: dt,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        signin: builder.mutation({
            query: (ab) => ({
                url:'/login',
                method: 'POST',
                body: ab,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        changePassword: builder.mutation({
            query: (body) => ({
                url:'/changepassword',
                method: 'POST',
                body: body,
                headers: {
                    'Content-Type':'application/json'
                }
            })
        }),
        hotelGet: builder.query({ query:()=>({url:'/hotel',headers:{'Content-Type':'application/json'}}) }),

    })
})

export const { 
    useSigninMutation,
    useHotelGetQuery
} = Api