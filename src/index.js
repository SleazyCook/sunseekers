import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import App from './components/App'
import ErrorPage from './components/ErrorPage'

import Home from './components/pages/home/Home'

import Characters from './components/pages/characters/Characters'

import Notes from './components/pages/notes/Notes'
import AdventureLog from './components/pages/notes/AdventureLog'
import StrahdLetters from './components/pages/notes/StrahdLetters'

import Market from './components/pages/market/Market'

import Locations from './components/pages/locations/Locations'

import NPCs from './components/pages/npc/NPCs'
import Baron from './components/pages/npc/Baron'
import Barovia from './components/pages/npc/Barovia'
import Church from './components/pages/npc/Church'
import Dragon from './components/pages/npc/Dragon'
import Feather from './components/pages/npc/Feather'
import Merchants from './components/pages/npc/Merchants'
import Ravenloft from './components/pages/npc/Ravenloft'
import Unknown from './components/pages/npc/Unknown'
import Vallaki from './components/pages/npc/Vallaki'
import Vistani from './components/pages/npc/Vistani'
import Wachterhaus from './components/pages/npc/Wachterhaus'
import Witches from './components/pages/npc/Witches'


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
        path: "notes/strahd-letters",
        element: <StrahdLetters />
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
        path: "non-player-characters/the-baron",
        element: <Baron />
      },
      {
        path: "non-player-characters/village-of-barovia",
        element: <Barovia />
      },
      {
        path: "non-player-characters/church-of-the-morninglord",
        element: <Church />
      },
      {
        path: "non-player-characters/order-of-the-silver-dragon",
        element: <Dragon />
      },
      {
        path: "non-player-characters/keepers-of-the-feather",
        element: <Feather />
      },
      {
        path: "non-player-characters/vallaki-merchants",
        element: <Merchants />
      },
      {
        path: "non-player-characters/castle-ravenloft",
        element: <Ravenloft />
      },
      {
        path: "non-player-characters/unknown-alliance",
        element: <Unknown />
      },
      {
        path: "non-player-characters/vallaki-citizens",
        element: <Vallaki />
      },
      {
        path: "non-player-characters/vistani",
        element: <Vistani />
      },
      {
        path: "non-player-characters/wachterhaus",
        element: <Wachterhaus />
      },
      {
        path: "non-player-characters/witches-and-creatures",
        element: <Witches />
      },
      {
        path: "quests",
        element: <Quests />
      }
    ]
  }
])

root.render(<RouterProvider router={router} />)