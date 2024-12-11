import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/redux/features/api/baseApi';
import authSlice from '@/redux/features/auth/authSlice';
import lessonsSlice from '@/redux/features/lessons/lessonsSlice';

export default configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice.reducer,
    lessons: lessonsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

  devTools: !import.meta.env.VITE_NODE_ENV === 'production',
});
