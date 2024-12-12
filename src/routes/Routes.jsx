import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminLayout from '@/layout/AdminLayout';
import DashBoard from '@/pages/dashboard/DashBoard';
import CreateLesson from '@/pages/dashboard/lesson/CreateLesson';
import Lessons from '@/pages/dashboard/lesson/Lessons';
import CreateVocabulary from '@/pages/dashboard/vocabulary/CreateVocabulary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute allowedRoles={['user']}>
            <div>Lesson</div>
          </PrivateRoute>
        ),
      },
      {
        path: '/lessons',
        element: (
          <PrivateRoute allowedRoles={['user']}>
            <div>Lesson</div>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: '/register',
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute allowedRoles={['admin']}>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: 'users',
        element: <div>User Management</div>,
      },
      {
        path: 'lessons',
        element: <Lessons />,
      },
      {
        path: 'lesson/create',
        element: <CreateLesson />,
      },
      {
        path: 'vocabulary/create',
        element: <CreateVocabulary />,
      },
      {
        path: 'tutorials',
        element: <div>Tutorials Management</div>,
      },
    ],
  },
]);
