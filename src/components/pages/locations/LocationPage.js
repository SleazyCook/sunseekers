import { useEffect, useState } from 'react' 
import { Link, useParams } from 'react-router-dom'

import Header from '../../Header';
import Navigation from '../../Navigation';

import locationsData from './LocationsData'
import renderWithLinks from '../notes/HyperlinkFunction';

function LocationPage() {
  
  const {locationNumber} = useParams();
  const [locationObj, setLocationObj] = useState({});

  useEffect(() => {
    setLocationObj(locationsData[locationNumber-1]);
  }, [locationNumber])

  return (
    <div>

      <Header />
      <Navigation />

      <div className="log-entry location">

        {/* MAIN TITLE & CONTENT */}
        <div className="log-entry__main">
          <h4 className="log-entry__title">
            {locationObj.name}
            </h4>

            <p style={{whiteSpace:'break-spaces'}}>{locationObj.quote}</p>

          <p className="log-entry__text hyperlink" style={{whiteSpace:'break-spaces'}}>
            {locationObj.main}
          </p>

        </div>

        {/* DETAILS BOX */}
        <div className="details-box">
          {/* Image */}
          <div className="details-box__section">
            <div>
              <span className="details-box__img-cap">{locationObj.imgCap}</span>
              <img className="details-box__img" src={locationObj.img} alt={`image of something`}/>
            </div>
          </div>
          {/* Date */}
          <div className="details-box__section">
            <div className="details-box__section--left">
              <b>Characters:</b>
            </div>
            <div className="details-box__section--right hyperlink">
              {locationObj.characters}
            {/* {locationObj.characters && renderWithLinks(locationObj.characters, locationObj.localLinks)} */}
            </div>
          </div>
          <div className="details-box__section">
            <div className="details-box__section--left">
              <b>Quests:</b>
            </div>
            <div className="details-box__section--right hyperlink">
              {locationObj.quests}
              {/* {locationObj.quests && renderWithLinks(locationObj.quests, locationObj.localLinks)} */}
            </div>
          </div>
          <div className="details-box__section">
            <div className="details-box__section--left">
              <b>Notes:</b>
            </div>
            <div className="details-box__section--right hyperlink">
              {locationObj.notes}
             {/* {locationObj.notes && renderWithLinks(locationObj.notes, locationObj.localLinks)} */}
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default LocationPage