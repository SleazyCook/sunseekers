import React from 'react'

import { GiAnvilImpact } from 'react-icons/gi'

function Blacksmith() {
  return (
    <div className="shop">

      <div className="shop__banner shop__banner--1">
        <div className="shop__icon"><GiAnvilImpact /></div>
        <div className="shop__header">
          <span className="shop__header--main">
            Cracked Anvil</span>
          <span className="shop__header--sub"><i>
            Dragomir Valisov</i></span>
        </div>

      </div> {/* Banner End */}
      

    </div>
  )
}

export default Blacksmith