import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="navigation">

      <div className="navigation--top">
        <Link to="/">Home</Link> |
        <Link to="player-characters"> PCs</Link> |
        <Link to="notes"> Notes</Link> |
        NPCs |
        Quests |
        Locations |
        <Link to="market"> Vallaki Market</Link>
      </div>



    </div>
  )
}

export default Navigation