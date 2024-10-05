// src/main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage, AboutPage, ProjectPage, SkillPage } from './pages';
import { ThemeProvider } from './context/ThemeContext.jsx';

import App from './App.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/projects',
        element: <ProjectPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/skills',
        element: <SkillPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)

