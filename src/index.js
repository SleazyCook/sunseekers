import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import App from './components/App'
import ErrorPage from './components/ErrorPage'

import Home from './components/pages/home/Home'

import Notes from './components/pages/notes/Notes'
import AdventureLog from './components/pages/notes/AdventureLog'
import Ireena from './components/pages/notes/Ireena'
import Maps from './components/pages/notes/Maps'
import Misc from './components/pages/notes/Misc'
import Safzira from './components/pages/notes/Safzira'
import StrahdLetters from './components/pages/notes/StrahdLetters'
import TarrokaReading from './components/pages/notes/TarrokaReading'
import VallakiLaws from './components/pages/notes/VallakiLaws'

import LogEntry from './components/pages/notes/LogEntry'

import Market from './components/pages/market/Market'

// import Locations from './components/pages/locations/Locations'
import LocationPage from './components/pages/locations/LocationPage'

import WorldMap from './components/pages/locations/WorldMap'

import Treasures from './components/pages/treasures/Treasures'

import Characters from './components/pages/characters/Characters'
import CharsByCat from './components/pages/characters/CharsByCat'

import Quests from './components/pages/quests/Quests'

import Resources from './components/pages/Resources'
import Feedback from './components/pages/Feedback'

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
        path: "resources",
        element: <Resources />
      },
      {
        path: "notes/treasures",
        element: <Treasures />
      },
      {
        path: "feedback",
        element: <Feedback />
      },
      {
        path: "notes/adventure-log",
        element: <AdventureLog />
      },
      {
        path: "notes/adventure-log/:entryNumber",
        element: <LogEntry />
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
        path: "notes/maps",
        element: <Maps />
      },
      {
        path: "notes/miscellaneous",
        element: <Misc />
      },
      {
        path: "market",
        element: <Market />
      },
      {
        path: "locations",
        element: <WorldMap />
      },
      {
        path: "locations/:locationNumber",
        element: <LocationPage />
      },
      {
        path: "locations/map",
        element: <WorldMap />
      },
      {
        path: "characters",
        element: <Characters />
      },
      {
        path: "characters/:catNumber",
        element: <CharsByCat />
      },
      {
        path: "quests",
        element: <Quests />
      }
    ]
  }
])

root.render(<RouterProvider router={router} />)