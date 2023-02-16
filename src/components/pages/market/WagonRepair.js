import React from 'react'

import { GiOldWagon } from 'react-icons/gi'

function WagonRepair() {
  return (
    <div className="shop">
      
      <div className="shop__banner shop__banner--1">
        <div className="shop__icon"><GiOldWagon /></div>
        <div className="shop__header">
          <span className="shop__header--main">
            Vallaki Wagon Repair</span>
          <span className="shop__header--sub"><i>
            Tural</i></span>
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
              -</td>
            <td className="shop__table-cell">
              -</td>
            <td className="shop__table-cell">
              -</td>
            <td className="shop__table-cell">
              -</td>
          </tr>
        </tbody>
      </table>
      
      </div>
  )
}

export default WagonRepair