import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import { ProtectedRoute } from '../components/ProtectedRoute';
import ChatPage from '../pages/ChatPage';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // Public routes
      {
        index: true,
        element: <HomePage />,
      },
      // Protected routes
      {
        path: '/app',
        element: (
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <ChatPage />,
          },
          {
            path: 'chat/:chatId',
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

