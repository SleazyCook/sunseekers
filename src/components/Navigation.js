import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="navigation">

      <div className="navigation--top">
        <Link to="/">Home</Link> |
        <Link to="/quests"> Quests</Link> |
        <Link to="/locations"> Locations</Link> |
        <Link to="/characters"> Characters</Link> |
        <Link to="/notes"> Journals </Link> |
        <Link to="/market"> Market</Link> |
        <Link to="/resources"> Resources</Link>
      </div>



    </div>
  )
}

export default Navigation