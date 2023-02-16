import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import Header from './Header'

import './style.css'

function App() {
  return (
    <div>

    <Header />

    <Link to="/">Home</Link> |
    <Link to="player-characters">PCs</Link> |
    <Link to="notes">Notes</Link> |
    NPCs |
    Quests |
    Locations |
    Vallaki Market |

    <Outlet context />

    </div>


  )
}

export default App