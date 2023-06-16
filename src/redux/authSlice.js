import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

export const authApi = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),

  endpoints: builder => ({
    register: builder.mutation({
      query: userData => ({
        url: '/users/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    logIn: builder.mutation({
      query: userData => ({
        url: '/users/login',
        method: 'POST',
        body: userData,
      }),
    }),
    logOut: builder.mutation({
      query: token => ({
        url: '/users/logout',
        method: 'POST',
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { useRegisterMutation, useLogInMutation, useLogOutMutation } = authApi;
export const { setToken } = authSlice.actions;
export const authtion = authSlice.reducer;

