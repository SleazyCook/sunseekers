import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

function Locations() {
  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Locations Guide</h2>
      </div>

      <div className="flexbox">

        <div className="flex__item">
          <Link to="mists">
            <div className="cat-card cat-card--mists">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Mists of Barovia</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="old-svalich-road">
            <div className="cat-card cat-card--old-svalich-road">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Old Svalich Road</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="svalich-woods">
            <div className="cat-card cat-card--svalich-woods">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Svalich Woods</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="river-ivlis">
            <div className="cat-card cat-card--river-ivlis">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">River Ivlis</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="barovia">
            <div className="cat-card cat-card--barovia">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Village of Barovia</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="tser-pool-encampent">
            <div className="cat-card cat-card--tser-pool-encampent">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Tser Pool Encampment</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="black-carriage">
            <div className="cat-card cat-card--black-carriage">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Black Carriage</h3>
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
          <Link to="old-mill">
            <div className="cat-card cat-card--old-mill">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Old Mill</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="vallaki">
            <div className="cat-card cat-card--vallaki">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Vallaki</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="vallaki-vistani-camp">
            <div className="cat-card cat-card--vallaki-vistani-camp">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Vallaki Vistani Camp</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="lake-zarovich">
            <div className="cat-card cat-card--lake-zarovich">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Lake Zarovich</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="mount-baratok">
            <div className="cat-card cat-card--mount-baratok">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Mount Baratok</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="argonvostholt">
            <div className="cat-card cat-card--argonvostholt">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Argonvostholt</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="village-of-krezk">
            <div className="cat-card cat-card--village-of-krezk">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Village of Krezk</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="tsolenka-pass">
            <div className="cat-card cat-card--tsolenka-pass">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Tsolenka Pass</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="ruins-of-berez">
            <div className="cat-card cat-card--ruins-of-berez">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Ruins of Berez</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="van-richten-tower">
            <div className="cat-card cat-card--van-richten-tower">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Van Richten's Tower</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="wizard-of-wines">
            <div className="cat-card cat-card--wizard-of-wines">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Wizard of Wines</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="amber-temple">
            <div className="cat-card cat-card--amber-temple">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Amber Temple</h3>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex__item">
          <Link to="yester-hill">
            <div className="cat-card cat-card--yester-hill">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Yester Hill</h3>
              </div>
            </div>
          </Link>
        </div>

        {/* <div className="flex__item">
          <Link to="werewolf-den">
            <div className="cat-card cat-card--werewolf-den">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">Werewolf Den</h3>
              </div>
            </div>
          </Link>
        </div> */}

      </div> {/* Flexbox End */}

      <Footer />

    </div>
  )
}

export default Locations