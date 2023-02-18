import React from 'react'
import { Link } from 'react-router-dom'

function NPCs() {
  return (
    <div className="flexbox">

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--ravenloft">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Castle Ravenloft</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--barovia">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Village of Barovia</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--vistani">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Vistani</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--keepers">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Keepers of the Feather</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--dragon">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Order of the Silver Dragon</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--church">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Church of the Morning Lord</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--baron">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">The Baron</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--wachterhaus">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Wachterhaus</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--merchants">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Vallaki Merchants</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--vallaki">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Vallaki Citizens</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--witches">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Witches & Creatures</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex__item">
        <Link to="/">
          <div className="cat-card cat-card--unknown">
            <div className="cat-card__text-box">
              <h3 className="cat-card__title">Unknown Alliance</h3>
            </div>
          </div>
        </Link>
      </div>


    </div>
  )
}

export default NPCs