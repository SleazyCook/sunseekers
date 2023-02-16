import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import Header from './Header'
import Navigation from './Navigation'

import './style.css'

function App() {
  return (
    <div>

    <Header />
    <Navigation />



    <Outlet context />

    </div>


  )
}

export default App