import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import logData from './LogData'

import renderWithLinks from './HyperlinkFunction';

function LogEntry() {

  let {entryNumber} = useParams();
  let [entryObj, setEntryObj] = useState({});

  let nextNumber = +entryNumber+1;
  let prevNumber = +entryNumber-1;

  useEffect(() => {
    setEntryObj(logData[entryNumber-1]);
    window.scrollTo({top: 0, left: 0});
  }, [entryNumber])

  return (
    <div>

        <div className="log-entry">

        {/* MAIN TITLE & CONTENT */}
        <div className="log-entry__main">
          <div className="log-entry__title">
            {entryObj.title}
            </div>

          <p className="log-entry__text hyperlink" style={{whiteSpace:'break-spaces'}}>
            {entryObj.entry && renderWithLinks(entryObj.entry, entryObj.localLinks)}

          </p>

          <div className="log-entry__page-buttons">

            {entryNumber === "1" ? <span className="log-entry__page-buttons--placeholder"></span> : <Link className="log-entry__page-buttons--last" to={`/notes/adventure-log/${prevNumber}`}>Previous Session: {logData[prevNumber-1].title}</Link>}

            <Link className="log-entry__page-buttons--mid" to="/notes/adventure-log">All Sessions</Link>

            {entryNumber >= logData.length ? <span className="log-entry__page-buttons--placeholder"></span> : <Link className="log-entry__page-buttons--next" to={`/notes/adventure-log/${nextNumber}`}>Next Session: {logData[nextNumber-1].title}</Link>}

          </div>
        
        </div>

        {/* DETAILS BOX */}
        <div className="details-box">
          <div className="details-box--actual">
            {/* details-box--actual is just the sticky component */}
          
            {/* Image */}
            <div className="details-box__section">
              <div>
                <span className="details-box__img-cap">{entryObj.imgCap}</span>
                <img className="details-box__img" src={entryObj.imgUrl} alt={`image of ${entryObj.imgAlt}`}/>
              </div>
            </div>
            {/* Date */}
            <div className="details-box__section">
              <div className="details-box__section--left">
                <b>Session Number:</b>
              </div>
              <div className="details-box__section--right">
                {entryObj.number}
              </div>
            </div>
            <div className="details-box__section">
              <div className="details-box__section--left">
                <b>In Game Date:</b>
              </div>
              <div className="details-box__section--right">
                {entryObj.gameDate}
              </div>
            </div>
            <div className="details-box__section">
              <div className="details-box__section--left">
                <b>Played:</b>
              </div>
              <div className="details-box__section--right">
                {entryObj.realDate}
              </div>
            </div>
            {/* Players */}
            <div className="details-box__section">
              <div className="details-box__section--left">
                <b>Players:</b>
              </div>
              <div className="details-box__section--right hyperlink">
                {entryObj.players && renderWithLinks(entryObj.players, entryObj.localLinks)}
              </div>
            </div>
            <div className="details-box__section">
              <div className="details-box__section--left">
                <b>NPCs:</b>
              </div>
              <div className="details-box__section--right hyperlink">
                {entryObj.npcs && renderWithLinks(entryObj.npcs, entryObj.localLinks)}
              </div>
            </div>
            <div className="details-box__section">
              <div className="details-box__section--left">
                <b>Quests:</b>
              </div>
              <div className="details-box__section--right hyperlink">
                {entryObj.quests && renderWithLinks(entryObj.quests, entryObj.localLinks)}
              </div>
            </div>
            <div className="details-box__section">
              <div className="details-box__section--left">
                <b>Locations:</b>
              </div>
              <div className="details-box__section--right hyperlink">
                {entryObj.locations && renderWithLinks(entryObj.locations, entryObj.localLinks)}
              </div>
            </div>
            
            </div> {/* end box--actual */}
            {/* <span>.</span> */}


          </div> {/* end box */}
        
        </div>


    </div>
  )
}

export default LogEntry