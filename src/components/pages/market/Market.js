import React from 'react'

import Blacksmith from './Blacksmith'
import Clothier from './Clothier'
import Apotheocary from './Apotheocary'
import Tannery from './Tannery'
import WagonRepair from './WagonRepair'
import OddsEnds from './OddsEnds'
import StraightArrow from './StraightArrow'

function Market() {
  return (
    <div className="market">
      
      <h2 className="heading-secondary u-center-text u-margin-bottom-medium">Vallaki Market</h2>

      <Blacksmith />
      <Clothier />
      <Apotheocary />
      <Tannery />
      <WagonRepair />
      <OddsEnds />
      <StraightArrow />

    </div>
  )
}

export default Market