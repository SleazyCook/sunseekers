import React, { useEffect, useRef, useState } from 'react'
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

  // console.log('nextNumber: ', typeof nextNumber, nextNumber)
  console.log()


  return (
    <div>

      <Header />
      <Navigation />
      
      <div className="u-center-text u-margin-bottom-big">
        <Link className="log-entry__link" to="/notes/adventure-log">
        <h2 className="heading-secondary">
          <span className="heading-secondary--main">
            Journals</span>
          <span className="heading-secondary--sub">
            Adventure Log</span>
          </h2>
        </Link>
      </div>


        <div className="log-entry__main">
          <h4 className="log-entry__title">
            {entryObj.title}
            </h4>

          <h5 className="log-entry__date">
            <span>
              {entryObj.gameDate}</span><br />
            <span>Played&nbsp;
              {entryObj.realDate}</span>
          </h5>

          <p className="log-entry__details hyperlink">
            <b>Player Characters:</b> &nbsp;
            {entryObj.players && renderWithLinks(entryObj.players, entryObj.localLinks)}
            <br />

            <b>Non-Player Characters:</b> &nbsp;
            {entryObj.npcs && renderWithLinks(entryObj.npcs, entryObj.localLinks)}
            <br />

            <b>Quests: </b> 
            {entryObj.quests && renderWithLinks(entryObj.quests, entryObj.localLinks)}

          </p>

          <p className="log-entry__text hyperlink" style={{whiteSpace:'break-spaces'}}>
            {entryObj.entry && renderWithLinks(entryObj.entry, entryObj.localLinks)}

          </p>
          
          {entryNumber === "1" ? <p>No Previous</p> : <Link to={`/notes/adventure-log/${prevNumber}`}>Previous Session: {logData[prevNumber-1].title}</Link>}


          {entryNumber >= logData.length ? <p>No Next</p> : <Link to={`/notes/adventure-log/${nextNumber}`}>Next Session: {logData[nextNumber-1].title}</Link>}
        
        </div>

      <Footer />

    </div>
  )
}

export default LogEntry