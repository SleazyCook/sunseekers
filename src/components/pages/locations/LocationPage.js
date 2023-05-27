import { useEffect, useState } from 'react' 
import { Link, useParams } from 'react-router-dom'

import Header from '../../Header';
import Navigation from '../../Navigation';
import Footer from '../../Footer';

import Gallery from './Gallery';

import locationsData from './LocationsData'
import renderWithLinks from '../notes/HyperlinkFunction';

function LocationPage() {
  const {locationNumber} = useParams();
  const [locationObj, setLocationObj] = useState({});
  const [galleryOpen, setGalleryOpen] = useState(false);

  let nextNumber = +locationNumber+1;
  let prevNumber = +locationNumber-1;

  useEffect(() => {
    setLocationObj(locationsData[locationNumber-1]);
    window.scroll({top: 0, left: 0});
  }, [locationNumber])

  return (
    <div>


      <div className="log-entry location">

        {/* MAIN TITLE & CONTENT */}
        <div className="log-entry__main">
        <div className="location__quote" style={{whiteSpace:'break-spaces'}}>
            <img src="https://i.imgur.com/1VJBkmO.png" className="location__quote--open"></img>
            <span className="location__quote--actul">{locationObj.quote}</span>
            <img src="https://i.imgur.com/1VJBkmO.png" className="location__quote--closed"></img>
          </div>

          <div className="log-entry__title-box">
          <span className="location__title heading-tertiary">{locationObj.name}</span>
            
            </div>

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
          {/* Leader */}
          {locationObj.leader && <div className="details-box__section">
            <div className="details-box__section--left">
              <b>Leader:</b>
            </div>
            <div className="details-box__section--right hyperlink">
            {locationObj.leader && renderWithLinks(locationObj.leader, locationObj.localLinks)}
            </div>
          </div>}
          {/* Characters */}
          {locationObj.characters && <div className="details-box__section">
            <div className="details-box__section--left">
              <b>Characters:</b>
            </div>
            <div className="details-box__section--right hyperlink">
            {locationObj.characters && renderWithLinks(locationObj.characters, locationObj.localLinks)}
            </div>
          </div> }
          {/* Quests */}
          {locationObj.quests && <div className="details-box__section">
            <div className="details-box__section--left">
              <b>Quests:</b>
            </div>
            <div className="details-box__section--right hyperlink">
              {locationObj.quests && renderWithLinks(locationObj.quests, locationObj.localLinks)}
            </div>
          </div> }
          {/* Notes */}
          {locationObj.notes && <div className="details-box__section">
            <div className="details-box__section--left">
              <b>Notes:</b>
            </div>
            <div className="details-box__section--right hyperlink">
             {locationObj.notes && renderWithLinks(locationObj.notes, locationObj.localLinks)}
            </div>
          </div> }
        </div> {/* Details Box End */}
        

      </div> {/* Flexbox End */}

      {/* <div className="page-section"> */}
        {locationObj?.sections?.map((sectionObj) => {
          return (
            <div key={sectionObj.number} className="page-section">
              <span className="page-section__title heading-tertiary">{sectionObj.name}</span>
              <p style={{whiteSpace:'break-spaces'}}>
                {sectionObj.content}
              </p>
            </div>
          )
        })}
      {/* </div> */}

      {/* Page Buttons */}
      <div className="log-entry__page-buttons">
        {locationNumber === "1" ? <p className="log-entry__page-buttons--placeholder"></p> : <Link className="log-entry__page-buttons--last location__button" to={`/locations/${prevNumber}`}>Previous Location: {locationsData[prevNumber-1].name}</Link>}

        {locationNumber >= locationsData.length ? <></> : <Link className="log-entry__page-buttons--next location__button" to={`/locations/${nextNumber}`}>Next Location: {locationsData[nextNumber-1].name}</Link>}
      </div>

      {/* Gallery */}
      <div className="gallery__header heading-secondary">Image Gallery</div>

      <div className="gallery">


        {locationObj?.gallery?.map((galleryObj) => {
          return (
            <div key={galleryObj.number} onClick={()=>setGalleryOpen(true)} className="gallery__img-box">
              <img className="gallery__img" src={galleryObj.img} alt={`image of ${galleryObj.cap}`}/>
              {/* <span classname="gallery__img-cap">{galleryObj.cap}</span> */}
            </div>
          )
        })}

        {/* Gallery Pop Up */}
        {galleryOpen && <Gallery locationObj={locationObj} setGalleryOpen={setGalleryOpen}/>}

      </div>  

    </div>
  )
}

export default LocationPage