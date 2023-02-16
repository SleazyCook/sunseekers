import React from 'react'

import { GiBrokenPottery } from 'react-icons/gi'

function OddsEnds() {
  return (
    <div className="shop">

      <div className="shop__banner shop__banner--1">
        <div className="shop__icon"><GiBrokenPottery /></div>
        <div className="shop__header">
          <span className="shop__header--main">
            Odds N Ends</span>
          <span className="shop__header--sub"><i>
            Bilbo</i></span>
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
              Blank Journal</td>
            <td className="shop__table-cell">
              0.80 gp</td>
            <td className="shop__table-cell">
              0.40 gp</td>
            <td className="shop__table-cell">
              0</td>
          </tr>
          <tr>
            <td className="shop__table-cell">
              Healing Kit</td>
            <td className="shop__table-cell">
              5 gp</td>
            <td className="shop__table-cell">
              2.50 gp</td>
            <td className="shop__table-cell">
              1</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default OddsEnds