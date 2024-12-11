import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import Home from '@/pages/home/Home';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';

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
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
