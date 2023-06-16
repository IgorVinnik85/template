import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    fillterContacts(state, action) {
      return action.payload;
    },
  },
});


export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: token => ({
        url: '/contacts',
        headers: {
          Authorization: token,
        },
      }),
      providesTags: ['contacts'],
    }),
    deleteContacts: builder.mutation({
      query: ({ id, token }) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: ({ contactData, token }) => ({
        url: 'contacts',
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: contactData,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const { fillterContacts } = filterSlice.actions;
export const filterToolKit = filterSlice.reducer;
export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddContactMutation,
} = contactsApi;
