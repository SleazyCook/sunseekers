import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import App from './components/App'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorPage: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

root.render(<RouterProvider router={router} />)