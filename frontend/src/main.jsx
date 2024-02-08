// package imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// page imports
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TasksPage from './pages/TasksPage.jsx';
import TaskPage from './pages/TaskPage.jsx';
import PeoplePage from './pages/PeoplePage.jsx';

// component imports

// style imports
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/projects",
        element: <ProjectsPage />
      },
      {
        path: "/project/:projectId",
        element: <ProjectPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/tasks",
        element: <TasksPage />
      },
      {
        path: "/task/:taskId",
        element: <TaskPage />
      },
      {
        path: "/people",
        element: <PeoplePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
