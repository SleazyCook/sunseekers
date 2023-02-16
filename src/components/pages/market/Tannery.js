import React from 'react'

import { GiLeatherArmor } from 'react-icons/gi'

function Tannery() {
  return (
    <div className="shop">

      <div className="shop__banner shop__banner--1">
        <div className="shop__icon"><GiLeatherArmor /></div>
        <div className="shop__header">
          <span className="shop__header--main">
            Lukresh Tannery</span>
          <span className="shop__header--sub"><i>
            Fatima Lukresh</i></span>
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
              Wolf Pelt</td>
            <td className="shop__table-cell">
              0.20 gp</td>
            <td className="shop__table-cell">
              0.10 gp</td>
            <td className="shop__table-cell">
              10</td>
          </tr>
          <tr>
            <td className="shop__table-cell">
              Dire Wolf Pelt</td>
            <td className="shop__table-cell">
              0.50 gp</td>
            <td className="shop__table-cell">
              0.25 gp</td>
            <td className="shop__table-cell">
              10</td>
          </tr>          <tr>
            <td className="shop__table-cell">
              Leather Bracers</td>
            <td className="shop__table-cell">
              2 gp</td>
            <td className="shop__table-cell">
              1 gp</td>
            <td className="shop__table-cell">
              20</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Tannery