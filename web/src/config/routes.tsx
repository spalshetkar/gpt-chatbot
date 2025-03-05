import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import AuthLayout from '../components/layout/AuthLayout';
import MainLayout from '../components/layout/MainLayout';
import LoadingFallback from '../components/common/LoadingFallback';
import ErrorFallback from '../components/common/ErrorFallback';

// Lazy-loaded page components
const HomePage = lazy(() => import('../pages/HomePage'));
const ChatPage = lazy(() => import('../pages/ChatPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorFallback />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <HomePage />
              </Suspense>
            )
          },
          {
            path: 'chat',
            element: (
              <ProtectedRoute>
                <Suspense fallback={<LoadingFallback />}>
                  <ChatPage />
                </Suspense>
              </ProtectedRoute>
            )
          }
        ]
      },
      {
        path: '/auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <LoginPage />
              </Suspense>
            )
          }
        ]
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <NotFoundPage />
          </Suspense>
        )
      }
    ]
  }
]);