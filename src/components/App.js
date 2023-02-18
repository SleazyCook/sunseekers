import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Navigation from './Navigation'

import './style.css'

function App() {
  return (
    <div>

    <Outlet context />


    </div>


  )
}

export default App