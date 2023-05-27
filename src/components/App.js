import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";

import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

import './style.css'

function App() {
  return (
    <div>

    <Header />
    <Navigation />

    <Outlet context />

    <Footer />

    <ScrollToTop smooth/>


    </div>


  )
}

export default App