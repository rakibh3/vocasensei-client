import { baseApi } from '../api/baseApi';

export const lessonsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to fetch all lessons
    getAllLessons: builder.query({
      query: () => {
        return {
          url: '/lessons',
          method: 'GET',
        };
      },
      providesTags: ['Lessons'],
    }),

    // Endpoint to create a new lesson
    createLesson: builder.mutation({
      query: (lessonData) => {
        return {
          url: '/lesson/create',
          method: 'POST',
          body: lessonData,
        };
      },
      invalidatesTags: ['Lessons'],
    }),

    // Endpoint to fetch a specific lesson by its lesson number
    getLesson: builder.query({
      query: (lessonNumber) => {
        return {
          url: `/lesson/${lessonNumber}`,
          method: 'GET',
        };
      },
      providesTags: ['Lessons'],
    }),

    // Endpoint to update an existing lesson by its ID
    updateLesson: builder.mutation({
      query: ({ id, payload }) => {
        return {
          url: `/lesson/edit/${id}`,
          method: 'PATCH',
          body: payload,
        };
      },
      invalidatesTags: ['Lessons'],
    }),

    // Endpoint to delete a lesson by its ID
    deleteLesson: builder.mutation({
      query: (id) => {
        return {
          url: `/lesson/delete/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Lessons'],
    }),
  }),
});

export const {
  useCreateLessonMutation,
  useGetAllLessonsQuery,
  useGetLessonQuery,
  useUpdateLessonMutation,
  useDeleteLessonMutation,
} = lessonsApi;
