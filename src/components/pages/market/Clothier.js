import React from 'react'

import { GiTravelDress } from 'react-icons/gi'

function Clothier() {
  return (
    <div>
      <div className="shop">

        <div className="shop__banner shop__banner--2">
          <div className="shop__icon">
            <GiTravelDress /></div>
          <div className="shop__header">
            <span className="shop__header--main">
              Endless Delights Clothier</span>
            <span className="shop__header--sub"><i>
              Alastroi Siblings (Alek, Andrej, and Alana)</i></span>
          </div>

        </div> {/* Banner End */}

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
                Child's Winter Cloak</td>
              <td className="shop__table-cell">
                4 gp</td>
              <td className="shop__table-cell">
                2 gp</td>
              <td className="shop__table-cell">
                0</td>
            </tr>
            <tr>
              <td className="shop__table-cell">
                Gold Ring</td>
              <td className="shop__table-cell">
                10 gp</td>
              <td className="shop__table-cell">
                5 gp</td>
              <td className="shop__table-cell">
                1</td>
            </tr>
            <tr>
              <td className="shop__table-cell">
                Topaz Necklace</td>
              <td className="shop__table-cell">
                100 gp</td>
              <td className="shop__table-cell">
                50 gp</td>
              <td className="shop__table-cell">
                0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Clothier