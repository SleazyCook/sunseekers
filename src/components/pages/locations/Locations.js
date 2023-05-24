import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import locationsData from './LocationsData'

function Locations() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Locations Guide</h2>
      </div>

      <div className="flexbox">

        <div className="flex__item">
          <Link to="map">
            <div className="cat-card cat-card--location-map">
              <div className="cat-card__text-box">
                <h3 className="cat-card__title">World Map</h3>
              </div>
            </div>
          </Link>
        </div>

        {locationsData.map((locationsObj) => {
          return (
            <div className="flex__item">
              <Link to="mists">
                <div className={`cat-card cat-card--location-${locationsObj.number}`}>
                  <div className="cat-card__text-box">
                    <h3 className="cat-card__title">{locationsObj.name}</h3>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}

      </div> {/* Flexbox End */}

      <Footer />

    </div>
  )
}

export default Locations