import { baseApi } from '../api/baseApi';
import { userLoggedIn } from './authSlice';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register API endpoint
    register: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),

    // Login API endpoint
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: response?.data?.data?.accessToken,
              user: response?.data?.data?.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: response?.data?.data?.accessToken,
              user: response?.data?.data?.user,
            })
          );
          // eslint-disable-next-line no-unused-vars, no-empty
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
