import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../../Header'
import Navigation from '../../../Navigation'
import Footer from '../../../Footer'

function J03() {
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
          <h4 className="log-entry__title">3. Madame Eva's Tarroka Reading</h4>
          <h5 className="log-entry__date">
            <span>14th Afternoon of Hammer</span><br />
            <span><i>June 13th, 2022 7pm </i></span>
          </h5>

          <p className="log-entry__details">
            <b>Player Characters: </b> Elizana, German, Safzira<br />
            <b>Non-Player Characters: </b> Freebird, Ireena, Lancelot<br />
            <b>Quests: </b> Madame Eva's Tarroka Reading
          </p>

          <p className="log-entry__text">
            -Strahd meets the party in person<br />
            -casually invites the party to visit the castle via Black Carriage<br />
            -Vistani camp (Tser Pool Encampment)<br />
            -Madame Eva's Card Reading<br />
            *Find the three objects, find a friend, fight strahd 
          </p>
        
        </div>

      <Footer />

    </div>
  )
}

export default J03