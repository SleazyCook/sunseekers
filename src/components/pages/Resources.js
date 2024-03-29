import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';

import resourcesData from './ResourcesData'

function Resources() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, [])

  // console.log(010)

  return (
    <div>

      <div className="resources">
        <div className="heading-secondary resources__title">Player Resources</div>
      </div>

      <div className="flexbox">

        {resourcesData.map((resourcesObj) => {
          return (
            <div className="flex__item" key={resourcesObj.number} value={resourcesObj.number}>
              <Link target="_blank" to={`${resourcesObj.link}`}>
                <div className={`cat-card cat-card--resources-${resourcesObj.number}`}>
                  <div className="cat-card__text-box">
                    <h3 className="cat-card__title">{resourcesObj.name}</h3>
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

export default Resources