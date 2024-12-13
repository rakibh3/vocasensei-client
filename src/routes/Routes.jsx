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
import Vocabularies from '@/pages/dashboard/vocabulary/Vocabularies';
import ManageUser from '@/pages/dashboard/user/ManageUser';
import LessonsPage from '@/pages/home/lessonsPage/LessonsPage';
import LessonPage from '@/pages/home/lessonsPage/LessonPage';
import { TutorialManagement } from '@/pages/tutorial/TutorialManagement';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute allowedRoles={['user']}>
            <LessonsPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/lessons',
        element: (
          <PrivateRoute allowedRoles={['user']}>
            <LessonsPage />
          </PrivateRoute>
        ),
      },
      {
        path: '/lesson/:lessonId',
        element: (
          <PrivateRoute allowedRoles={['user']}>
            <LessonPage />
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
      {
        path: 'tutorials',
        element: <TutorialManagement />,
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
        element: (
          <PrivateRoute allowedRoles={['admin']}>
            <DashBoard />,
          </PrivateRoute>
        ),
      },
      {
        path: 'users',
        element: (
          <PrivateRoute allowedRoles={['admin']}>
            <ManageUser />,
          </PrivateRoute>
        ),
      },
      {
        path: 'lessons',
        element: (
          <PrivateRoute allowedRoles={['admin']}>
            <Lessons />,
          </PrivateRoute>
        ),
      },
      {
        path: 'lesson/create',
        element: (
          <PrivateRoute allowedRoles={['admin']}>
            <CreateLesson />,
          </PrivateRoute>
        ),
      },
      {
        path: 'vocabulary/create',
        element: (
          <PrivateRoute allowedRoles={['admin']}>
            <CreateVocabulary />,
          </PrivateRoute>
        ),
      },
      {
        path: 'vocabularies',
        element: (
          <PrivateRoute allowedRoles={['admin']}>
            <Vocabularies />,
          </PrivateRoute>
        ),
      },
      {
        path: 'tutorials',
        element: <TutorialManagement />,
      },
    ],
  },
]);
