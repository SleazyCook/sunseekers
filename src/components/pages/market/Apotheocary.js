import React from 'react'

import { GiPotionBall } from 'react-icons/gi'

function Apotheocary() {
  return (
    <div className="shop">

      <div className="shop__banner shop__banner--3">
        <div className="shop__icon">
          <GiPotionBall /></div>
        <div className="shop__header">
          <span className="shop__header--main">
            Stefanovich Apothecary</span>
          <span className="shop__header--sub"><i>
            Harkus Stefanovich</i></span>
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
              Healing Potion</td>
            <td className="shop__table-cell">
              5 gp</td>
            <td className="shop__table-cell">
              2.5 gp</td>
            <td className="shop__table-cell">
              1</td>
          </tr>
          <tr>
            <td className="shop__table-cell">
              Greater Healing Potion</td>
            <td className="shop__table-cell">
              20 gp</td>
            <td className="shop__table-cell">
              10 gp</td>
            <td className="shop__table-cell">
              1</td>
          </tr>
          <tr>
            <td className="shop__table-cell">
              Mystery Potion</td>
            <td className="shop__table-cell">
              2 gp</td>
            <td className="shop__table-cell">
              1 gp</td>
            <td className="shop__table-cell">
              3</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}

export default Apotheocary