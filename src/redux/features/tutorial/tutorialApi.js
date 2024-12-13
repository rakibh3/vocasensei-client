import { baseApi } from '../api/baseApi';

export const tutorialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTutorial: builder.mutation({
      query: (tutorial) => ({
        url: '/tutorial/create',
        method: 'POST',
        body: tutorial,
      }),
      invalidatesTags: ['Tutorial'],
    }),

    // Get all tutorials
    getAllTutorials: builder.query({
      query: () => '/tutorials',
      providesTags: ['Tutorial'],
    }),

    // Get a single tutorial
    getTutorial: builder.query({
      query: (id) => `/tutorial/${id}`,
      providesTags: ['Tutorial'],
    }),

    // Update an existing tutorial
    updateTutorial: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `/tutorial/edit/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['Tutorial'],
    }),
    // Delete an existing tutorial
    deleteTutorial: builder.mutation({
      query: (id) => ({
        url: `/tutorial/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tutorial'],
    }),
  }),
});

export const {
  useCreateTutorialMutation,
  useGetAllTutorialsQuery,
  useGetTutorialQuery,
  useUpdateTutorialMutation,
  useDeleteTutorialMutation,
} = tutorialApi;
