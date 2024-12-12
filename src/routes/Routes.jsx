import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import Home from '@/pages/home/Home';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminLayout from '@/layout/AdminLayout';
import DashBoard from '@/pages/dashboard/DashBoard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
      {
        path: '/lessons',
        element: (
          <PrivateRoute allowedRoles={['user']}>
            <div>Lesson</div>
          </PrivateRoute>
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
        element: <div>Lessons Management</div>,
      },
      {
        path: 'tutorials',
        element: <div>Tutorials Management</div>,
      },
    ],
  },
]);
