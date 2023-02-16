import React from 'react'

import { GiBowArrow } from 'react-icons/gi'

function StraightArrow() {
  return (
    <div className="shop">

      <div className="shop__banner shop__banner--7">
        <div className="shop__icon"><GiBowArrow /></div>
        <div className="shop__header">
          <span className="shop__header--main">
            The Straight Arrow</span>
          <span className="shop__header--sub"><i>
            Ana Krogarov</i></span>
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

export default StraightArrow