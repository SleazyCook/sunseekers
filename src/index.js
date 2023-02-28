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

import J01 from './components/pages/notes/log-entries/J01'
import J02 from './components/pages/notes/log-entries/J02'
import J03 from './components/pages/notes/log-entries/J03'
import J04 from './components/pages/notes/log-entries/J04'
import J05 from './components/pages/notes/log-entries/J05'
import J06 from './components/pages/notes/log-entries/J06'
import J07 from './components/pages/notes/log-entries/J07'
import J08 from './components/pages/notes/log-entries/J08'
import J09 from './components/pages/notes/log-entries/J09'
import J10 from './components/pages/notes/log-entries/J10'
import J11 from './components/pages/notes/log-entries/J11'
import J12 from './components/pages/notes/log-entries/J12'
import J13 from './components/pages/notes/log-entries/J13'
import J14 from './components/pages/notes/log-entries/J14'
import J15 from './components/pages/notes/log-entries/J15'
import J16 from './components/pages/notes/log-entries/J16'
import J17 from './components/pages/notes/log-entries/J17'
import J18 from './components/pages/notes/log-entries/J18'


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
        path: "notes/adventure-log/01",
        element: <J01 />
      },
      {
        path: "notes/adventure-log/02",
        element: <J02 />
      },
      {
        path: "notes/adventure-log/03",
        element: <J03 />
      },
      {
        path: "notes/adventure-log/04",
        element: <J04 />
      },
      {
        path: "notes/adventure-log/05",
        element: <J05 />
      },
      {
        path: "notes/adventure-log/06",
        element: <J06 />
      },
      {
        path: "notes/adventure-log/07",
        element: <J07 />
      },
      {
        path: "notes/adventure-log/08",
        element: <J08 />
      },
      {
        path: "notes/adventure-log/09",
        element: <J09 />
      },
      {
        path: "notes/adventure-log/10",
        element: <J10 />
      },
      {
        path: "notes/adventure-log/11",
        element: <J11 />
      },
      {
        path: "notes/adventure-log/12",
        element: <J12 />
      },
      {
        path: "notes/adventure-log/13",
        element: <J13 />
      },
      {
        path: "notes/adventure-log/14",
        element: <J14 />
      },
      {
        path: "notes/adventure-log/15",
        element: <J15 />
      },
      {
        path: "notes/adventure-log/16",
        element: <J16 />
      },
      {
        path: "notes/adventure-log/17",
        element: <J17 />
      },
      {
        path: "notes/adventure-log/18",
        element: <J18 />
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