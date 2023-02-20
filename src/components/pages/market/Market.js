import React from 'react'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import Blacksmith from './Blacksmith'
import Clothier from './Clothier'
import Apotheocary from './Apotheocary'
import Tannery from './Tannery'
import WagonRepair from './WagonRepair'
import OddsEnds from './OddsEnds'
import StraightArrow from './StraightArrow'

function Market() {
  return (
    <div>

      <Header />
      <Navigation />
      
      <h2 className="heading-secondary u-center-text u-margin-bottom-medium">Vallaki Market</h2>

      <Blacksmith />
      <Clothier />
      <Apotheocary />
      <Tannery />
      <WagonRepair />
      <OddsEnds />
      <StraightArrow />


      <Footer />

    </div>
  )
}

export default Market