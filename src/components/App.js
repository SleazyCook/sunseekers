import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";

import Header from './Header'
import Navigation from './Navigation'

import './style.css'

function App() {
  return (
    <div>

    <Outlet context />

    <ScrollToTop smooth/>


    </div>


  )
}

export default App