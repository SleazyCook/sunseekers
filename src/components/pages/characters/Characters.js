import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import charactersData from './CharactersData'

function Characters() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])


  return (
    <div>

      <Header />
      <Navigation />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Character Guide</h2>
      </div>

      <div className="flexbox">

        {charactersData.map((charactersObj) => {
          return (
            <div className="flex__item">
              <Link to={`${charactersObj.link}`}>
                <div className={`cat-card cat-card--characters-${charactersObj.number}`}>
                  <div className="cat-card__text-box">
                    <h3 className="cat-card__title">{charactersObj.name}</h3>
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

export default Characters