import { createBrowserRouter, Navigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage.tsx'
import MainLayout from '../components/layout/MainLayout.tsx'
import ErrorPage from '../pages/ErrorPage.tsx'
import TaskLayout from '../components/layout/TaskLayout.tsx'
import TaskList, { taskListLoader } from '../pages/TaskList.tsx'
import TaskDetail, { taskLoader } from '../pages/TaskDetail.tsx'
import NotFoundPage from '../pages/NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/tasks" replace /> },
      {
        path: 'tasks',
        element: <TaskLayout />,
        children: [
          { index: true, element: <TaskList />, loader: taskListLoader },
          { path: ':id', element: <TaskDetail />, loader: taskLoader },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
