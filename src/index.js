import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import App from './components/App'
import ErrorPage from './components/ErrorPage'

import Home from './components/pages/home/Home'

import Notes from './components/pages/notes/Notes'
import AdventureLog from './components/pages/notes/AdventureLog'
import Ireena from './components/pages/notes/Ireena'
import Safzira from './components/pages/notes/Safzira'
import StrahdLetters from './components/pages/notes/StrahdLetters'
import TarrokaReading from './components/pages/notes/TarrokaReading'
import VallakiLaws from './components/pages/notes/VallakiLaws'

import Market from './components/pages/market/Market'

import Locations from './components/pages/locations/Locations'

import Players from './components/pages/characters/sunseekers/Players'
import Characters from './components/pages/characters/Characters'
import Baron from './components/pages/characters/Baron'
import Barovia from './components/pages/characters/Barovia'
import Church from './components/pages/characters/Church'
import Dragon from './components/pages/characters/Dragon'
import Feather from './components/pages/characters/Feather'
import Merchants from './components/pages/characters/Merchants'
import Ravenloft from './components/pages/characters/Ravenloft'
import Unknown from './components/pages/characters/Unknown'
import Vallaki from './components/pages/characters/Vallaki'
import Vistani from './components/pages/characters/Vistani'
import Wachterhaus from './components/pages/characters/Wachterhaus'
import Witches from './components/pages/characters/Witches'

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
        path: "notes/tarroka-reading",
        element: <TarrokaReading />
      },
      {
        path: "notes/strahd-notes",
        element: <StrahdLetters />
      },
      {
        path: "notes/vallaki-laws",
        element: <VallakiLaws />
      },
      {
        path: "notes/safzira-diary",
        element: <Safzira />
      },
      {
        path: "notes/ireena-diary",
        element: <Ireena />
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
        element: <Characters />
      },
      {
        path: "characters/sunseekers",
        element: <Players />
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