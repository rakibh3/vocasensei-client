import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/redux/features/api/baseApi';
import authSliceReducer from '@/redux/features/auth/authSlice';
import lessonsSliceReducer from '@/redux/features/lessons/lessonsSlice';

export default configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSliceReducer,
    lessons: lessonsSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});
