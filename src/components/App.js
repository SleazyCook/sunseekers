import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'

import './style.css'

function App() {
  return (
    <div>

    <Header />

    <Outlet context />

    </div>


  )
}

export default App