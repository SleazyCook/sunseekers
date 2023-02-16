import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import App from './components/App'
import ErrorPage from './components/ErrorPage'

import Home from './components/pages/home/Home'

import Characters from './components/pages/characters/Characters'

import Notes from './components/pages/notes/Notes'
import AdventureLog from './components/pages/notes/AdventureLog'

import Market from './components/pages/market/Market'

import Locations from './components/pages/locations/Locations'

import NPCs from './components/pages/npc/NPCs'

import Quests from './components/pages/quests/Quests'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "sunseekers",
        element: <Characters />
      },
      {
        path: "notes",
        element: <Notes />,
      },
      {
        path: "notes/adventure-log",
        element: <AdventureLog />
      },
      {
        path: "market",
        element: <Market />
      },
      {
        path: "locations",
        element: <Locations />
      },
      {
        path: "non-player-characters",
        element: <NPCs />
      },
      {
        path: "quests",
        element: <Quests />
      }
    ]
  }
])

root.render(<RouterProvider router={router} />)