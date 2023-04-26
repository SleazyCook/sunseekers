import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Header from '../../Header'
import Navigation from '../../Navigation'
import Footer from '../../Footer'

import logData from './LogData'

function LogEntry() {

  let {entryNumber} = useParams();
  let [entryObj, setEntryObj] = useState({});

  useEffect(() => {
    setEntryObj(logData[entryNumber-1])
    console.log(entryNumber-1)
  }, [])

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
            <span><i>
              {entryObj.realDate}</i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters:</b> 
            {entryObj.players?.join(', ')}
            <br />

            <b>Non-Player Characters:</b> 
            {entryObj.npcs?.join(', ')}
            <br />

            <b>Quests: </b> 
            {entryObj.quests?.join(', ')}
          </p>

          <p className="log-entry__text">
            {entryObj.entry}

          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default LogEntry