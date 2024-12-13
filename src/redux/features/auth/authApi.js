import { baseApi } from '../api/baseApi';
import { userLoggedIn } from './authSlice';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to get all users
    getAllUsers: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),

    // Endpoint to update user role
    updateUserRole: builder.mutation({
      query: ({ id, role }) => {
        return {
          url: `/user/${id}`,
          method: 'PATCH',
          body: { role },
        };
      },
      invalidatesTags: ['Users'],
    }),

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

    //
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useRegisterMutation,
  useLoginMutation,
} = authApi;
