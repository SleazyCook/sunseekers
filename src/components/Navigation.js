import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="navigation">

      <div className="navigation--top">
        <Link to="/">Home</Link> |
        <Link to="sunseekers"> Sunseekers</Link> |
        <Link to="notes"> Notes</Link> |
        <Link to="non-player-characters"> NPCs</Link> |
        <Link to="quests"> Quests</Link> |
        <Link to="locations"> Locations</Link> |
        <Link to="market"> Vallaki Market</Link>
      </div>



    </div>
  )
}

export default Navigation