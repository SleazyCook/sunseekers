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
        path: "characters",
        element: <NPCs />
      },
      {
        path: "characters/sunseekers",
        element: <Characters />
      },
      {
        path: "characters/the-baron",
        element: <Baron />
      },
      {
        path: "characters/village-of-barovia",
        element: <Barovia />
      },
      {
        path: "characters/church-of-the-morninglord",
        element: <Church />
      },
      {
        path: "characters/order-of-the-silver-dragon",
        element: <Dragon />
      },
      {
        path: "characters/keepers-of-the-feather",
        element: <Feather />
      },
      {
        path: "characters/vallaki-merchants",
        element: <Merchants />
      },
      {
        path: "characters/castle-ravenloft",
        element: <Ravenloft />
      },
      {
        path: "characters/unknown-alliance",
        element: <Unknown />
      },
      {
        path: "characters/vallaki-citizens",
        element: <Vallaki />
      },
      {
        path: "characters/vistani",
        element: <Vistani />
      },
      {
        path: "characters/wachterhaus",
        element: <Wachterhaus />
      },
      {
        path: "characters/witches-and-creatures",
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