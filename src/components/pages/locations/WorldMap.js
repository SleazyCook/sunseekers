import { Link } from 'react-router-dom';

import Header from '../../Header';
import Navigation from '../../Navigation';

import locationsData from './LocationsData';

function WorldMap() {
  return (
    <div>

      <Header />
      <Navigation />

      <div className="world-map__flexbox">
        <div className="world-map">

          {locationsData.map((mapObj) => {
            return (
              <Link to="/" className={`world-map__coordinates world-map__coordinates--${mapObj.number}`}>
                {console.log(mapObj.number)}
                <span className="world-map__pin"></span>
                <span className="world-map__location-name">{mapObj.name}</span>
                <img className="world-map__img"src={mapObj.img} />
              </Link>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default WorldMap