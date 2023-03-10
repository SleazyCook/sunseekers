import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

function Notes() {
  return (
    <div>

       <Header />
       <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Journals</h2>
      </div>

      <div className="flexbox">

        <div className="flex__item">
          <Link to="adventure-log">
            <div className="cat-card cat-card--adventure-log">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Adventure Log</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="tarroka-reading">
            <div className="cat-card cat-card--tarroka-reading">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Tarroka Reading</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="strahd-notes">
            <div className="cat-card cat-card--strahd-notes">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Strahd Notes</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="vallaki-laws">
            <div className="cat-card cat-card--vallaki-laws">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Vallaki Laws</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="safzira-diary">
            <div className="cat-card cat-card--safzira-diary">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Safzira's Diary</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="ireena-diary">
            <div className="cat-card cat-card--ireena-diary">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Ireena's Diary</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="maps">
            <div className="cat-card cat-card--maps">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Maps</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="miscellaneous">
            <div className="cat-card cat-card--misc">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Miscellaneous</h3>
              </div>
            </div>
          </Link>
        </div>
      
      </div> {/* Flexbox End */}

      

      <Footer />
      

    </div>
  )
}

export default Notes