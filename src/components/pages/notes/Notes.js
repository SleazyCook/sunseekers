import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import journalsData from './JournalsData'

function Notes() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0})
  }, [])

  return (
    <div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Journals</h2>
      </div>

      <div className="flexbox">

        {journalsData.map((journalsObj) => {
          return (
            <div className="flex__item">
            <Link to={`${journalsObj.link}`}>
              <div className={`cat-card cat-card--journal-${journalsObj.number}`}>
                <div className="cat-card__text-box">
                  <h3 className="cat-card__title">{journalsObj.name}</h3>
                </div>
              </div>
            </Link>
          </div>
          )
        })}
      
      </div> {/* Flexbox End */}


      

    </div>
  )
}

export default Notes