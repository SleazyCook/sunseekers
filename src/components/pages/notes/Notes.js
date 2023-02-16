import React from 'react'
import { Link } from 'react-router-dom'

function Notes() {
  return (
    <div>Notes

      <br />

      <Link to="adventure-log">Adventure Log</Link>
      <Link to="strahd-letters/#death-house">Death House Note</Link>
      <Link to="strahd-letters/#tome-of-strahd">Tome of Strahd</Link>

      


    </div>
  )
}

export default Notes