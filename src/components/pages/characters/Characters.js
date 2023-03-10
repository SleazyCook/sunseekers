import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

function Characters() {
  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Character Guide</h2>
      </div>

      <div className="flexbox">

        <div className="flex__item">
          <Link to="sunseekers">
            <div className="cat-card cat-card--sunseekers">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Sunseekers</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="castle-ravenloft">
            <div className="cat-card cat-card--ravenloft">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Castle Ravenloft</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="village-of-barovia">
            <div className="cat-card cat-card--barovia">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Village of Barovia</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="vistani">
            <div className="cat-card cat-card--vistani">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Vistani</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="keepers-of-the-feather">
            <div className="cat-card cat-card--keepers">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Keepers of the Feather</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="order-of-the-silver-dragon">
            <div className="cat-card cat-card--dragon">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Order of the Silver Dragon</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="church-of-the-morninglord">
            <div className="cat-card cat-card--church">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Church of the Morning Lord</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="the-baron">
            <div className="cat-card cat-card--baron">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">The Baron</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="wachterhaus">
            <div className="cat-card cat-card--wachterhaus">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Wachterhaus</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="vallaki-merchants">
            <div className="cat-card cat-card--merchants">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Vallaki Merchants</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="vallaki-citizens">
            <div className="cat-card cat-card--vallaki">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Vallaki Citizens</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="witches-and-creatures">
            <div className="cat-card cat-card--witches">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Witches & Creatures</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="unknown-alliance">
            <div className="cat-card cat-card--unknown">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Unknown Alliance</h3>
              </div>
            </div>
          </Link>
        </div>

      </div> {/* Flexbox End */}

      <Footer />
      
    </div>
  )
}

export default Characters