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

      </div> 
      {/* Banner End */}

      <table className="shop__table">
        <thead className="shop__table-header">
          <tr className="shop__row">
            <th className="shop__row-header-text">Item</th>
            <th className="shop__row-header-text">Buying Price</th>
            <th className="shop__row-header-text">Selling Price</th>
            <th className="shop__row-header-text">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="shop__table-cell">
              Silver Coating</td>
            <td className="shop__table-cell">
              15 gp + 1 sil. bar</td>
            <td className="shop__table-cell">
              N/a</td>
            <td className="shop__table-cell">
              N/a</td>
          </tr>
        </tbody>
      </table>

      

    </div>
  )
}

export default Blacksmith