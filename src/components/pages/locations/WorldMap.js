import { Link } from 'react-router-dom';

import Header from '../../Header';
import Navigation from '../../Navigation';

import locationsData from './LocationsData';

function WorldMap() {
  return (
    <div>

      <div className="world-map__flexbox">
        <div className="world-map">

          {locationsData.map((mapObj) => {
            return (
              <Link to={`/locations/${mapObj.number}`} key={mapObj.number} className={`world-map__coordinates world-map__coordinates--${mapObj.number}`}>
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