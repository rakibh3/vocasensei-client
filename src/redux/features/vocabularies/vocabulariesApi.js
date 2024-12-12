import { baseApi } from '../api/baseApi';

export const vocabulariesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to fetch all vocabularies
    getAllVocabularies: builder.query({
      query: () => {
        return {
          url: '/vocabularies',
          method: 'GET',
        };
      },
      providesTags: ['Vocabularies'],
    }),

    // Endpoint to create a new vocabulary entry
    createVocabulary: builder.mutation({
      query: (vocabularyData) => {
        return {
          url: '/vocabulary/create',
          method: 'POST',
          body: vocabularyData,
        };
      },
      invalidatesTags: ['Vocabularies'],
    }),

    // Endpoint to fetch a specific vocabulary by lesson number
    getVocabulary: builder.query({
      query: (lessonNo) => {
        return {
          url: `/vocabulary/${lessonNo}`,
          method: 'GET',
        };
      },
      providesTags: ['Vocabularies'],
    }),

    // Endpoint to update an existing vocabulary by its ID
    updateVocabulary: builder.mutation({
      query: ({ id, payload }) => {
        return {
          url: `/vocabulary/edit/${id}`,
          method: 'PATCH',
          body: payload,
        };
      },
      invalidatesTags: ['Vocabularies'],
    }),

    // Endpoint to delete a vocabulary entry by ID
    deleteVocabulary: builder.mutation({
      query: (id) => {
        return {
          url: `/vocabulary/delete/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Vocabularies'],
    }),
  }),
});

export const {
  useGetAllVocabulariesQuery,
  useCreateVocabularyMutation,
  useGetVocabularyQuery,
  useUpdateVocabularyMutation,
  useDeleteVocabularyMutation,
} = vocabulariesApi;
